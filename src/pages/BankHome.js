import React from "react";
import { useSelector, useDispatch } from "react-redux";

function BankHome() {
	const balance = useSelector((state) => state.reducer.balance);
	const loan = useSelector((state) => state.loanReducer.loan);
	const dispatch = useDispatch();

	function applyLoan() {
		dispatch({ type: "APPLY" });
	}
	return (
		<div>
			<h1>Balance: {balance}</h1>
			<h1>{loan ? "Loan Applied" : "Loan needed"}:</h1>
			<button
				className="button-style"
				disable={loan ? true : false}
				onClick={applyLoan}
			>
				{loan ? "Loan Applied" : "Apply for loan"}
			</button>
		</div>
	);
}

export default BankHome;
