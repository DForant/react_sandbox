import {createContext, useContext, useState} from 'react'

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return(
        <AppContext.Provider value={{
            isSidebarOpen,
            isModalOpen,
            openSidebar,
            openModal,
            closeSidebar,
            closeModal
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}