const Usp = ({ title, body }) => {
	return (
		<div className="text-start bg-gradient-to-r from-purple-500 via-sky-500 to-transparent p-px skew-x-12">
			<div className="bg-gradient-to-r from-[#151238] to-[#0a0818] px-6 py-3">
				<h2 className="text-2xl -skew-x-12 -translate-x-1">{title}</h2>
				<p className="-skew-x-12">{body}</p>
			</div>
		</div>
	);
};

export default Usp;
