import {
  WALLET_LIST_FAILURE,
	WALLET_LIST_REQUEST,
	WALLET_LIST_SUCCESS,

} from "../constants/walletConstants";

export const walletListReducer = (state = { wallets: [] }, action) => {
	switch (action.type) {
		case WALLET_LIST_REQUEST:
			return { loading: true, wallets: [] };

		case WALLET_LIST_SUCCESS:
			return { loading: false, wallets: action.payload };

		case WALLET_LIST_FAILURE:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
