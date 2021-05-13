import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "../action/balanceAction";

function Deposit() {
	const balance = useSelector((state) => state.reducer.balance);
	const loan = useSelector((state) => state.loanReducer.loan);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.reducer.loading);
	function onDeposit() {
		dispatch(balanceActions.depositAsync());
	}
	return (
		<div>
			{loading ? <h1>Saving...</h1> : <h1>Balance: {balance}</h1>}
			<button onClick={onDeposit}> Deposit </button>
			<h2>{loan ? "User applied for loan" : "User has no loan"}</h2>
		</div>
	);
}

export default Deposit;
