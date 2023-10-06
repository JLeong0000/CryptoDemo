import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Navbar = ({ scrollToElement }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<motion.nav
			className="bg-gradient-to-b from-[#0a0818a7] to-transparent sticky top-0 z-50"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5, delay: 2.5 } }}
		>
			<div className="max-w-screen-2xl font-kanit text-white text-lg mx-auto flex justify-between px-4 py-5">
				<img
					src="../../crypticLogo.png"
					alt=""
					onClick={() => scrollToElement("home")}
					className="w-60 h-full cursor-pointer"
				/>
				<div className="hidden md:block">
					<div className="uppercase items-center flex py-2 space-x-10 lg:space-x-24">
						<a
							onClick={() => scrollToElement("market")}
							className="cursor-pointer hover:text-purple-500 active:text-purple-600"
						>
							market
						</a>
						<a
							onClick={() => scrollToElement("benefits")}
							className="cursor-pointer hover:text-purple-500 active:text-purple-600"
						>
							benefits
						</a>
						<a
							onClick={() => scrollToElement("team")}
							className="cursor-pointer hover:text-purple-500 active:text-purple-600"
						>
							team
						</a>
						<a
							onClick={() => scrollToElement("faqs")}
							className="cursor-pointer hover:text-purple-500 active:text-purple-600"
						>
							faqs
						</a>
					</div>
				</div>
				<div className="flex space-x-3 md:space-x-6 items-center">
					<a href="https://www.instagram.com/">
						<Icon
							icon="mdi:instagram"
							width={30}
							className="hover:scale-110 active:text-purple-500"
						/>
					</a>
					<a href="https://twitter.com/">
						<Icon
							icon="ri:twitter-line"
							width={30}
							className="hover:scale-110 active:text-purple-500"
						/>
					</a>

					<div className="block md:hidden">
						{isOpen ? (
							<div className="text-black bg-white h-screen absolute top-0 right-0 w-52 flex items-start justify-end">
								<div className="uppercase flex flex-col justify-end items-end text-right m-5 space-y-10">
									<button onClick={() => setOpen(!isOpen)}>
										<Icon
											icon="ph:x-bold"
											width={30}
										/>
									</button>
									<a
										onClick={() => {
											scrollToElement("home");
											setOpen(!isOpen);
										}}
										className="cursor-pointer text-2xl"
									>
										home
									</a>
									<a
										onClick={() => {
											scrollToElement("market");
											setOpen(!isOpen);
										}}
										className="cursor-pointer text-2xl"
									>
										market
									</a>
									<a
										onClick={() => {
											scrollToElement("benefits");
											setOpen(!isOpen);
										}}
										className="cursor-pointer text-2xl"
									>
										benefits
									</a>
									<a
										onClick={() => {
											scrollToElement("team");
											setOpen(!isOpen);
										}}
										className="cursor-pointer text-2xl"
									>
										team
									</a>
									<a
										onClick={() => {
											scrollToElement("faqs");
											setOpen(!isOpen);
										}}
										className="cursor-pointer text-2xl"
									>
										faqs
									</a>
								</div>
							</div>
						) : (
							<Icon
								icon="iconamoon:menu-burger-horizontal"
								width={30}
								onClick={() => setOpen(!isOpen)}
								className="cursor-pointer"
							/>
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
