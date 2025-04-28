import Title from './Title'
import List from './List'
import LogiButton from './LogiButton'

function App() {

  return (
    <main className='bg-indigo-100 flex justify-center items-center min-h-screen'>
      <section className='bg-white w-[40rem] max-w-6xl my-20 rounded py-6 px- shadow'> 
        <Title/>
        <List/>
        <LogiButton/>
      </section>
    </main>
  )
}

export default App
