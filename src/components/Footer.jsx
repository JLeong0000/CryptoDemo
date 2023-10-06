import { Icon } from "@iconify/react";

const Footer = ({ scrollToElement }) => {
	return (
		<div className="space-y-5">
			<div className="flex justify-center mb-10">
				<button
					onClick={() => scrollToElement("home")}
					className=" bg-zinc-600 rounded-sm px-10 py-3 hover:bg-zinc-700 active:bg-zinc-800"
				>
					Back to Top
				</button>
			</div>
			<div className="flex justify-center space-x-6">
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
				<a href="https://www.facebook.com/">
					<Icon
						icon="ant-design:facebook-outlined"
						width={30}
						className="hover:scale-110 active:text-purple-500"
					/>
				</a>
				<a href="https://www.youtube.com/">
					<Icon
						icon="ant-design:youtube-outlined"
						width={30}
						className="hover:scale-110 active:text-purple-500"
					/>
				</a>
			</div>
			<div className="flex justify-center space-x-8">
				<p className="hover:text-purple-500 active:text-purple-600 cursor-pointer">Privacy</p>
				<p className="hover:text-purple-500 active:text-purple-600 cursor-pointer">Terms of Use</p>
			</div>
		</div>
	);
};

export default Footer;
