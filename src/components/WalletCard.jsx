function WalletCard({ wallet }) {
	return (
		<div>
			{/* Card */}
			<div className="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900 flex flex-col sm:flex-row justify-between">
				<div className="flex items-center gap-x-4 ">
					<div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full ">
						<span className="inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border-4 border-gray-100 bg-gray-200 text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200">
							<svg
								className="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
							</svg>
						</span>
					</div>
					<div className="flex-shrink-0">
						<h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
							Wallet : {wallet._id}
						</h3>
					</div>
				</div>
				<div className="text-gray-600 dark:text-gray-400 flex flex-col justify-around text-sm  mt-2 sm:mt-0">
					<div>
						<span className="font-semibold">Balance:</span> ₹
						{wallet.balance}
					</div>
					<div>
						{" "}
						<span className="font-semibold">Created On:</span>{" "}
						{wallet.createdAt}
					</div>
				</div>
			</div>
			{/* End Card */}
		</div>
	);
}
export default WalletCard;
