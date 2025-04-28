import {useReducer, createContext, useContext} from 'react'
import data from './data'
import {REMOVE_PERSON, RESET_PEOPLE, CLEAR_PEOPLE} from './actions'
import reducer from './reducer'

const GlobalContext =  createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const AppContext = ({children}) => {
    const defaultState = {
        people: data
    }

    const [state, dispatch] = useReducer(reducer, defaultState)

    const removePerson = (id) => {
        dispatch({type: REMOVE_PERSON, payload: {id}})
    }
  
    const clearPeople = () => {
      dispatch({type: CLEAR_PEOPLE})
    }
  
    const resetPeople = () => {
        dispatch({type: RESET_PEOPLE})
    }

    return (
        <GlobalContext.Provider
            value={{
                ...state, 
                removePerson,
                resetPeople,
                clearPeople
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
  
}

