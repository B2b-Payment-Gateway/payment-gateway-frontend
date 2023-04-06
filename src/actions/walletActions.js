import axios from "axios";
import {
	WALLET_LIST_FAILURE,
	WALLET_LIST_REQUEST,
	WALLET_LIST_SUCCESS,
} from "../constants/walletConstants";

export const listWallets = () => async (dispatch) => {
	try {
		dispatch({ type: WALLET_LIST_REQUEST });

		const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`/api/v1/wallets`, config);

		dispatch({ type: WALLET_LIST_SUCCESS, payload: data.wallets });
	} catch (error) {
		dispatch({ type: WALLET_LIST_FAILURE, payload: error.message });
	}
};
