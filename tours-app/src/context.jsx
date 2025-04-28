import {useState, createContext, useContext} from 'react'

const url = 'https://course-api.com/react-tours-project'
const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const AppContext = ({children}) => {
    const [tours, setTours] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
  
    const fetchData = async() => {
      try{
        const resp = await fetch(url)
        if(!resp.ok){
          setIsError(true)
          setIsLoading(false)
          console.log(resp.message)
        }
        const tours = await resp.json()
        setTours(tours)
      } catch(err){
          setIsError(true)
          console.log((err))
      }
      setIsLoading(false)
    }
  
    const removeTour = (id) => {
      const newTours = tours.filter((tour) => tour.id !== id)
      setTours(newTours)
    }
  
    const clearTours = () => {
      setTours([])
    }
  
    const resetTours = () => {
      setIsLoading(true)
      fetchData()
    }

    return(
        <GlobalContext.Provider
            value={{
                tours,
                isLoading,
                isError,
                removeTour,
                resetTours,
                clearTours,
                fetchData
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
  
}