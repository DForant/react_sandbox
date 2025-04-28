import {createContext, useContext, useState} from 'react'
import { shortList, list, longList } from './data'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [people, setPeople] = useState(list)
    const [currentPerson, setCurrentPerson] = useState(0)

    const prevSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson - 1 + people.length) % people.length
            return result
        })
    }

    const nextSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson + 1) % people.length
            return result
        })
    }

    return(
        <GlobalContext.Provider value={{people, currentPerson, prevSlide, nextSlide}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext
