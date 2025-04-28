import { useGlobalContext } from './context'
import {FaBars} from 'react-icons/fa'

const Home = () => {  
  const {openModal, openSidebar} = useGlobalContext()

  return (
    <main>
        {/*
        Here we create two buttons. One to open the sidebar component, and 
        the other to open the modal component
        */}
        <button type='button' onClick={openSidebar} className='sidebar-toggle'>
          <FaBars/>
        </button>
        <button type='button' onClick={openModal} className='btn'>
          Show Modal
        </button>
    </main>
  )
}

export default Home