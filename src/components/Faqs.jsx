import { Icon } from "@iconify/react";
import { useState } from "react";

const Faqs = ({ faq }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<div
			onClick={() => setOpen(!isOpen)}
			className="bg-gradient-to-r from-purple-500 to-sky-500 p-px rounded-md cursor-pointer lg:mx-4"
		>
			<div className="bg-[#110d28] rounded-md py-5 px-8 space-y-2 hover:bg-[#1c163c] active:bg-[#251f44]">
				<div className="flex justify-between items-center">
					<h1>{faq}</h1>
					{isOpen ? (
						<Icon
							icon="ic:baseline-minus"
							className="text-[#00eaff]"
						/>
					) : (
						<Icon
							icon="ic:baseline-plus"
							className="text-[#00eaff]"
						/>
					)}
				</div>

				{isOpen && (
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem eaque nam, quia nobis neque quod alias, reprehenderit ratione laudantium quam, dicta iste sed necessitatibus fugiat
						dolor sit? Illum, adipisci!
					</p>
				)}
			</div>
		</div>
	);
};

export default Faqs;
