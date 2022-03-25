import { getLoggedInUser } from "../auth/UserManager.js";

let thisOrder = {
    userId: 0,
    notes: "no notes",
    timestamp: "no date",
    isPickedUp: false
}


export const placeOrder = (orderObj) => {
    if (getLoggedInUser().name) {
        alert(`a user is logged in and an order is being placed. logic for placing an order has yet to be implemented`);
    } else {
        alert(`You must log in before placing order.`);
    }
}