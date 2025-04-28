import {createContext, useContext, useState} from 'react'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) =>{
        if(category === 'all'){
          setMenuItems(items)
          return
        }
        const newMenuItems = items.filter((item) => item.category === category)
        setMenuItems(newMenuItems)
    } 

    return(
        <GlobalContext.Provider value={{menuItems, categories, filterItems}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext