/**
 * The getTotals function will take in the cart object as a parameter
 * and adjust the total amout and total cost for each item based on the cart
 * values of amount and price
 */
export const getTotals = (cart) => {
    let totalAmount = 0
    let totalCost = 0

    for (let {amount, price} of cart.values()){
        totalAmount += amount
        totalCost += amount*price
    }

    /*
    We return the total amount of a items in the cart as well as the
    total cost of the cart.
    */
    return {totalAmount, totalCost}
}
