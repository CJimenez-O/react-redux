import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Withdraw() {
	const balance = useSelector((state) => state.reducer.balance);
	const dispatch = useDispatch();
	function onWithdraw() {
		dispatch({ type: "WITHDRAW", payload: balance });
	}
	return (
		<div>
			<h1>Balance: {balance}</h1>
			<button onClick={onWithdraw}> Withdraw </button>
		</div>
	);
}

export default Withdraw;
