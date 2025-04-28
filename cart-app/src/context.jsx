import {createContext, useContext, useEffect, useReducer} from 'react'
import reducer from './reducer'
import { CLEAR_CART, REMOVE_ITEM, INCREASE, DECREASE, DISPLAY_ITEMS, LOADING } from './actions'
import { getTotals } from './utils'
const url = 'https://www.course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

/*
Our initialState variable, contains a loading and cart property. The
loading property is set to false, and the cart property is an empty array
using Map.
*/
const initialState = {
    loading: false,
    cart: new Map()
}

export const AppProvider = ({children}) => {
    /**
    Here we set up our reducer state as well as get the totalAmount 
    and totalCost from getTotals
     */
    const [state, dispatch] = useReducer(reducer, initialState)
    const {totalAmount, totalCost} = getTotals(state.cart)

    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id}})
    }

    const increase = (id) => {
        dispatch({type: INCREASE, payload: {id}})
    }

    const decrease = (id) => {
        dispatch({type: DECREASE, payload: {id}})
    }

    const fetchData = async() => {
        dispatch({type: LOADING})
        const resp = await fetch(url)
        const cart = await resp.json()
        dispatch({type: DISPLAY_ITEMS, payload: {cart}})
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            increase,
            decrease,
            removeItem,
            totalAmount,
            totalCost
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

