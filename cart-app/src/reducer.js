import {
    CLEAR_CART,
    REMOVE_ITEM,
    INCREASE,
    DECREASE,
    DISPLAY_ITEMS,
    LOADING
} from './actions'

const reducer = (state, action) => {

    /*
    Here we return an empty Map for the cart. this effectively clears
    out cart
    */
    if(action.type === CLEAR_CART){
        return{...state, cart: new Map()}
    }

    /*
    To Remove an item we first get a copy of the current cart using
    the Map method and bring in the cart state value. We then use
    this cart to delete the item that matches the item id from the payload
    and finally, we return the newCart in place of the cart property.
    Note: If an item has more then a quantity of 1 this method will remove
    all of that item. 
    */
    if(action.type === REMOVE_ITEM){
        const newCart = new Map(state.cart)
        newCart.delete(action.payload.id)
        return{...state, cart: newCart}
    }

    /*
    To increase the quantity we create a copy of the cart using the
    Map method. we create a const for the itemId using the payload id
    and we get the item using that id. We then create a newItem using
    a deconstructed item as well as setting the item property to 
    item.amount+1. Finally, we set the new cart and return it with the 
    state value
    */
    if(action.type === INCREASE){
        const newCart = new Map(state.cart)
        const itemId = action.payload.id
        const item = newCart.get(itemId)
        const newItem = {...item, amount: item.amount+1}
        newCart.set(itemId, newItem)
        return{...state, cart: newCart}
    }

    /*
    Similar to the increase action, the decrease does the same the only
    main difference is that we check if the amount is equal to 1 and if
    so, we delete the item altogether. and of course rather then setting the
    amount +1, we set it to amount-1
    */
    if(action.type === DECREASE){
        const newCart = new Map(state.cart)
        const itemId = action.payload.id
        const item = newCart.get(itemId)
        if(item.amount === 1){
            newCart.delete(itemId)
            return{...state, cart: newCart}
        }

        const newItem = {...item, amount: item.amount-1}
        newCart.set(itemId, newItem)
        return{...state, cart: newCart}
    }

    /*
    The loading action simply sets the loading boolean to true
    */
    if(action.type === LOADING){
        return{...state, loading: false}
    }

    /*
    We display the items by creating a new cart by mapping out the
    contents of our cart we return the state, and set the loading flag to 
    false and the cart set to out newCart value
     */
    if(action.type === DISPLAY_ITEMS){
        const newCart = new Map(action.payload.cart.map((item) => [item.id, item]))
        return {...state, loading: false, cart: newCart}
    }

    /*
    We end with error catching to display a message when there is 
    no matching action type.
    */
    throw new Error(`No matching action type : ${action.type}.`) 
}

export default reducer