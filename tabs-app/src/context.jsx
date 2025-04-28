import {createContext, useContext, useState} from 'react'
import axios from 'axios'

const url = 'https://course-api.com/react-tabs-project';
const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [jobs, setJobs] = useState([])
    const [currentItem, setCurrentItem] = useState(0)
  
    const fetchData = async() => {
      try{
        const {data} = await axios(url)
        setJobs(data)
      } catch (err){
        setIsError(true)
        console.log(err)
      }
      setIsLoading(false)
    }  
    
    return(
        <GlobalContext.Provider value={{jobs, isLoading, isError, fetchData, currentItem, setCurrentItem }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext