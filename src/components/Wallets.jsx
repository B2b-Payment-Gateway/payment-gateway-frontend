import { useEffect } from "react";
import WalletCard from "./WalletCard";
import { useDispatch, useSelector } from "react-redux";
import { listWallets } from "../actions/walletActions";
import Spinner from "./Spinner";
import ErrorToast from "./ErrorToast";

function Wallets() {
	const dispatch = useDispatch();
	const walletList = useSelector((state) => state.walletList);
	const { loading, error, wallets } = walletList;
	useEffect(() => {
		dispatch(listWallets());
	}, [dispatch]);

	return (
		<div>
			<>
				<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					{loading ? (
						<Spinner />
					) : error ? (
						<ErrorToast error={error} />
					) : (
						<div className="grid sm:grid-cols-1 lg:grid-cols-1 items-center gap-6 md:gap-10">
							{wallets.map((wallet) => {
								return (
									<WalletCard
										key={wallet._id}
										wallet={wallet}
									/>
								);
							})}
						</div>
					)}
				</div>
				{/* End Icon Blocks */}
			</>
		</div>
	);
}
export default Wallets;
