import { getLoggedInUser } from "../auth/UserManager.js";


export const placeOrder = (orderObj) => {
    if (getLoggedInUser().name) {
        console.log('a user is logged in');
        //logic for placing an order
    } else {
        console.log('no user is logged in');
        alert(`You must log in before placing order.`);
    }
}