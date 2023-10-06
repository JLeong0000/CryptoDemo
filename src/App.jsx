import { motion, useScroll, useTransform } from "framer-motion";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import MarketTable from "./components/MarketTable";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Usp from "./components/Usp";
import { useRef } from "react";

const App = () => {
	const scrollToElement = elementId => {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	};

	const usp = [
		["Real-Time Tracking", "Stay updated with live market data"],
		["User-Friendly Interface", "Enjoy a sleek and intuitive design"],
		["Security", "Rest assured with top-notch security measures"],
		["Diverse Asset Support", "Access a wide range of cryptocurrencies"],
		["Low Fees", "Benefit from competitive trading fees and minimal transaction costs"],
		["Mobile Accessibility", "Trade on-the-go with our mobile app"],
	];

	const team = [
		[
			"https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
			"Stefani Jacobs",
			"Founder",
		],
		[
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
			"Elaine De'lanor",
			"Marketing",
		],
		["https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80", "Renault Raj", "CTO"],
		[
			"https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
			"Jairus Mare",
			"Developer",
		],
		[
			"https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
			"Marie Rodriguez",
			"CFO",
		],
	];

	const faqs = [
		"What is cryptocurrency?",
		"What is a cryptocurrency wallet?",
		"How can I protect myself from cryptocurrency scams and fraud?",
		"What is the volatility of cryptocurrencies?",
		"Can I use cryptocurrencies for everyday purchases?",
		"What is the future of cryptocurrencies?",
		"What are the environmental concerns related to cryptocurrency mining?",
	];

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1 1"],
	});
	const x = useTransform(scrollYProgress, [0, 1], [70, 0]);
	const minusX = useTransform(scrollYProgress, [0, 1], [-150, 0]);
	const rotate = useTransform(scrollYProgress, [0, 1], [-30, 0]);

	return (
		<div>
			<Navbar scrollToElement={scrollToElement} />
			<div className="max-w-screen-2xl mx-auto">
				{/* Banner */}
				<section
					id="home"
					className="font-kanit text-white bg-[url(../../BannerImg.png)] bg-bottom bg-no-repeat bg-cover absolute top-0 left-0 h-screen w-full flex items-center justify-center z-0"
				>
					<div className="flex flex-col space-y-10 mx-4">
						<div className="space-y-5">
							<motion.h1
								className="text-5xl text-center z-50 sm:text-6xl"
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
							>
								Revolutionize your cryptocurrency journey
							</motion.h1>
							<div className="overflow-hidden">
								<motion.p
									className="text-xl text-center"
									initial={{ y: 50 }}
									animate={{ y: 0, transition: { duration: 0.5, delay: 2 } }}
								>
									Real-time tracking and seamless trading to empower your financial success
								</motion.p>
							</div>
						</div>
						<div className="flex justify-center flex-col mx-10 overflow-hidden sm:mx-0 sm:flex-row sm:space-x-4">
							<motion.button
								className="bg-violet-600 rounded-sm px-12 py-3 mb-4 text-xl hover:bg-violet-700 active:bg-violet-800"
								initial={{ y: 70, opacity: 0 }}
								animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 2.5 } }}
							>
								Trade with us
							</motion.button>
							<motion.button
								onClick={() => scrollToElement("benefits")}
								className="bg-zinc-500 rounded-sm px-12 py-3 mb-4 text-xl hover:bg-zinc-600 active:bg-zinc-700"
								initial={{ y: 70, opacity: 0 }}
								animate={{ y: 0, opacity: 1, transition: { duration: 0.5, delay: 2.5 } }}
							>
								Find out more
							</motion.button>
						</div>
					</div>
				</section>

				{/* Market Updates */}
				<section
					id="market"
					className="font-kanit text-white mt-[100vh] mx-4 py-1"
				>
					<h1 className="font-eth text-4xl tracking-wide uppercase my-8">Market Updates</h1>
					<MarketTable />
				</section>

				{/* Benefits */}
				<section
					id="benefits"
					ref={ref}
					className="font-kanit text-white text-center my-32 space-y-10"
				>
					<h1 className="font-eth text-4xl tracking-wide uppercase">What we offer you</h1>
					<div className="flex items-center justify-center overflow-hidden object-scale-down">
						<motion.img
							src="../../bitcoin.png"
							className="w-[500px] hidden lg:block"
							style={{ x: minusX, opacity: scrollYProgress, rotate: rotate }}
						/>
						<div className="ms-5 space-y-1 lg:space-y-2">
							{usp.map((benefit, index) => {
								return (
									<motion.div
										key={index}
										style={{ x: x, opacity: scrollYProgress }}
									>
										<Usp
											title={benefit[0]}
											body={benefit[1]}
										/>
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Our Team */}
				<section
					id="team"
					className="font-kanit text-white text-center mx-4 py-16 my-32 space-y-4 md:space-y-10"
				>
					<h1 className="font-eth text-4xl tracking-wide uppercase">OUR TEAM</h1>
					<Team team={team} />
				</section>

				{/* Connect with us */}
				<section
					id="faqs"
					className="font-kanit text-white mx-4 py-8 my-32 space-y-4 md:space-y-10"
				>
					<div className="grid grid-cols-1 lg:grid-cols-3">
						<h1 className="font-eth text-4xl tracking-wide uppercase me-4 mb-8 text-start lg:text-end">Frequently Asked Questions</h1>
						<div className="col-span-2 space-y-2">
							{faqs.map((faq, index) => {
								return (
									<div key={index}>
										<Faqs faq={faq} />
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<section className="my-16 text-white font-kanit">
					{/* Back to top button */}
					<Footer scrollToElement={scrollToElement} />
				</section>
			</div>
		</div>
	);
};

export default App;
