import {useEffect} from 'react'
import Loading from './Loading'
import Error from './Error'
import Tours from './Tours'
import LogiButton from './LogiButton'
import Title from './Title'
import { useGlobalContext } from './context'

function App() {
  const {isLoading, isError, fetchData} = useGlobalContext()

  useEffect(() => {
    fetchData()
  },[])

  if(isLoading){
    return(
      <Loading/>
    )
  }

  if(isError){
    <Error/>
  }

  return (
    <main>
      <Title title='Our Tours' lineLength='15'/>
      <Tours/>
      <LogiButton/>
    </main>
  )
}

export default App
