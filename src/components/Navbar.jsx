import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";

const parent = { start: { x: 210 }, end: { x: 0, transition: { ease: easeOut, staggerChildren: 0.2 } }, exit: { x: 210 } };
const navLink = { start: { x: 20, opacity: 0, filter: "blur(5px)" }, end: { x: 0, opacity: 1, filter: "blur(0px)", transition: { ease: easeOut } } };

const Navbar = ({ scrollToElement }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<motion.nav
			className="bg-gradient-to-b from-[#0a0818a7] to-transparent sticky top-0 z-50"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.8, delay: 1.5, ease: easeIn } }}
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

					{/* Nav Burger */}
					<div className="block md:hidden">
						<AnimatePresence>
							{isOpen ? (
								<motion.div
									className="text-black bg-white h-screen absolute top-0 right-0 w-52 flex items-start justify-end"
									key="modal"
									variants={parent}
									initial="start"
									animate="end"
									exit="exit"
								>
									<div className="uppercase flex flex-col justify-end items-end text-right m-5 space-y-10">
										<button onClick={() => setOpen(!isOpen)}>
											<Icon
												icon="ph:x-bold"
												width={30}
											/>
										</button>
										<motion.a
											onClick={() => {
												scrollToElement("home");
												setOpen(!isOpen);
											}}
											className="cursor-pointer text-2xl"
											variants={navLink}
										>
											home
										</motion.a>
										<motion.a
											onClick={() => {
												scrollToElement("market");
												setOpen(!isOpen);
											}}
											className="cursor-pointer text-2xl"
											variants={navLink}
										>
											market
										</motion.a>
										<motion.a
											onClick={() => {
												scrollToElement("benefits");
												setOpen(!isOpen);
											}}
											className="cursor-pointer text-2xl"
											variants={navLink}
										>
											benefits
										</motion.a>
										<motion.a
											onClick={() => {
												scrollToElement("team");
												setOpen(!isOpen);
											}}
											className="cursor-pointer text-2xl"
											variants={navLink}
										>
											team
										</motion.a>
										<motion.a
											onClick={() => {
												scrollToElement("faqs");
												setOpen(!isOpen);
											}}
											className="cursor-pointer text-2xl"
											variants={navLink}
										>
											faqs
										</motion.a>
									</div>
								</motion.div>
							) : (
								<Icon
									icon="iconamoon:menu-burger-horizontal"
									width={30}
									onClick={() => setOpen(!isOpen)}
									className="cursor-pointer"
								/>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
