import {createContext, useContext, useState} from 'react'
import App from './App'

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [pageId, setPageId] = useState(null)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return(
        <AppContext.Provider value={{
            isSidebarOpen,
            pageId,
            setPageId,
            openSidebar,
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>    
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}