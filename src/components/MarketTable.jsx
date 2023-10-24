import { Icon } from "@iconify/react";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData } from "../api/getData";

const parent = { start: { opacity: 0 }, end: { opacity: 1 } };
const child = { start: { opacity: 0, scale: 0.8 }, end: { opacity: 1, scale: 1, transition: { ease: easeOut, duration: 0.7 } } };

const MarketTable = () => {
	const { isLoading, isError, error, data: crypto } = useQuery({ queryKey: ["crypto"], queryFn: getData });
	if (isError) {
		console.log(error);
	}
	const [currentPage, setCurrentPage] = useState(1);
	const startIndex = (currentPage - 1) * 7;
	const endIndex = startIndex + 7;
	const pageData = crypto?.data.slice(startIndex, endIndex);

	return (
		<div className="font-kanit uppercase">
			{isLoading ? (
				<p>isLoading...</p>
			) : isError ? (
				<p>There was an error loading</p>
			) : (
				<div>
					{/* Table */}
					<div className="overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500">
						<table className="table-auto min-w-full">
							<thead>
								<tr className="bg-[#7a4a8964]">
									<th className="font-normal text-start px-6 py-2">symbol</th>
									<th className="font-normal text-start px-6 py-2 whitespace-nowrap">1d change</th>
									<th className="font-normal text-start px-6 py-2">price</th>
									<th className="font-normal text-start px-6 py-2">volume</th>
									<th className="font-normal text-start px-6 py-2">vwap</th>
								</tr>
							</thead>
							<motion.tbody
								variants={parent}
								initial="start"
								whileInView="end"
							>
								{pageData.map((coin, index) => {
									return (
										<motion.tr
											key={index}
											className="even:bg-[#3a2c4764] odd:bg-[#27163664]"
											variants={child}
											initial="start"
											whileInView="end"
										>
											<td className="px-6 py-5 flex items-center">
												<img
													src={`https://cryptologos.cc/logos/${coin.id}-${coin.symbol.toLowerCase()}-logo.svg?v=026`}
													alt=""
													className="w-8 pe-2"
												/>
												{coin.symbol}
											</td>
											{Number(coin.changePercent24Hr) >= 0 ? (
												<td className="text-green-500 px-6 py-5">{((Number(coin.changePercent24Hr) || 0) * 100).toFixed(2) + "%"}</td>
											) : (
												<td className="text-red-500 px-6 py-5">{((Number(coin.changePercent24Hr) || 0) * 100).toFixed(2) + "%"}</td>
											)}
											<td className="px-6 py-5">{"$" + (Number(coin.priceUsd) || 0).toFixed(2)}</td>
											<td className="px-6 py-5">{"$" + ((Number(coin.volumeUsd24Hr) || 0) / 1000000).toFixed(2) + "M"}</td>
											<td className="px-6 py-5">{"$" + (Number(coin.vwap24Hr) || 0).toFixed(2)}</td>
										</motion.tr>
									);
								})}
							</motion.tbody>
						</table>
					</div>
					{/* Page dots */}
					<div className="flex space-x-5 justify-center my-6">
						{[...Array(5)].map((a, index) => {
							return (
								<button
									onClick={() => setCurrentPage(index + 1)}
									key={index}
								>
									{currentPage === index + 1 ? (
										<Icon
											icon="octicon:dot-fill-16"
											width={20}
											className="text-purple-500"
										/>
									) : (
										<Icon
											icon="octicon:dot-fill-16"
											width={20}
										/>
									)}
								</button>
							);
						})}
					</div>
					{/* Prev Next buttons */}
					<div className="mb-4 block sm:hidden">
						<div className="flex justify-center space-x-2">
							{currentPage !== 1 && (
								<button
									onClick={() => setCurrentPage(currentPage - 1)}
									className="px-10 py-2 bg-purple-700 rounded-sm"
								>
									Prev
								</button>
							)}
							{currentPage !== 5 && (
								<button
									onClick={() => setCurrentPage(currentPage + 1)}
									className="px-10 py-2 bg-purple-700 rounded-sm"
								>
									Next
								</button>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MarketTable;
