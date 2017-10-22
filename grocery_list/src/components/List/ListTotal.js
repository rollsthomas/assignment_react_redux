/****************************
Shows the total of amount of items.
take props of the total
*****************************/

import React from "react";
import PropTypes from "prop-types";

const ListTotal = ({ total }) => {
	console.log("HITT", total);
	return (
		<div className="amount_total">
			<p>Total Amount:</p>
			<p>{total}</p>
		</div>
	);
};

ListTotal.propTypes = {};
export default ListTotal;
