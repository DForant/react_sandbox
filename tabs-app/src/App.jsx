import {useEffect} from 'react'
import Loading from './Loading'
import Error from './Error'
import JobInfo from './JobInfo'
import BtnContainer from './BtnContainer'
import { useGlobalContext } from './context'

function App() {
  const {fetchData, isLoading, isError} = useGlobalContext()

  useEffect(() => {
    fetchData()
  }, [])

  if(isLoading){
    return(
      <Loading/>
    )
  }

  if(isError){
    return(
      <Error/>
    )
  }

  return (
    <section className='jobs-center'>
      <BtnContainer/>
      <JobInfo/>
    </section>
  )
}

export default App
