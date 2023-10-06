import { motion } from "framer-motion";

const Team = ({ team }) => {
	return (
		<>
			<div className="flex justify-center space-x-4 flex-wrap md:flex-nowrap overflow-hidden">
				{team.map((member, index) => {
					return (
						<div
							key={index}
							className="group my-2"
						>
							<motion.div
								className="rounded-lg from-cyan-400 to-transparent p-[1.5px] group-odd:bg-gradient-to-b group-even:bg-gradient-to-t"
								initial={{ x: 150, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1.5, delay: 0.2 * index }}
								viewport={{ once: true, amount: 0.5 }}
							>
								<img
									src={member[0]}
									className="w-40 h-48 rounded-lg object-cover object-top md:w-60 md:h-80"
								/>
							</motion.div>
							<motion.h1
								className="text-lg pt-2 md:text-xl"
								initial={{ x: 150, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, delay: 1 + 0.2 * index }}
							>
								{member[1]}
							</motion.h1>
							<motion.p
								className="text-zinc-300"
								initial={{ x: 150, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{ duration: 1, delay: 1.2 + 0.2 * index }}
							>
								{member[2]}
							</motion.p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Team;
