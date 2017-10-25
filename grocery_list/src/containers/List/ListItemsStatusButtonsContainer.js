/*
Holds 3 buttons
Purchase (toggle)
remove
Edit
*/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItemsStatusButtons from "../../components/List/ListItemStatusButtons";
import { purchaseToggle, remove } from "../../actions";
let className = "not_purchased";

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.id,
		status: ownProps.status,
		classNames: ownProps.status ? "purchased_btn" : "not_purchased_btn"
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		//toggles status, text,of purchase button
		onPurchaseToggle: e => {
			e.preventDefault();
			console.log("e.value purchase", e.target);
			let text =
				e.target.className !== "purchased_btn" ? "Got it!" : "Purchase";
			e.target.innerHTML = text;
			let id = parseInt(e.target.id);
			dispatch(purchaseToggle(id));
		},
		onRemove: e => {
			e.preventDefault();
			let id = parseInt(e.target.id);
			dispatch(remove(id));
		}
	};
};

const ListItemsStatusButtonsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItemsStatusButtons);

ListItemsStatusButtonsContainer.propTypes = {};
export default ListItemsStatusButtonsContainer;
