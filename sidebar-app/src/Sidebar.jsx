import { useGlobalContext } from './context'
import {FaTimes} from 'react-icons/fa'
import {links, social} from './data'
import logo from './logo.svg'

const Sidebar = () => {
  /*
  Here, we get the isSidebarOpen value and closeSidebar function from the
  global context.
   */
  const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return (
    /*
    Here, we use the ternary operator to display the show-sidebar css class
    dependent on it the isSidebarOpen value is set to true or not.
     */
    <div className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='Coding Addict' className='logo'/>
        {/*
        We add a close button that will call the closeSidebar function, which
        sets the isSidebarOpen value to false which in turn collapses the
        sidebar.
        */}
        <button className='close-btn' type='button' onClick={closeSidebar}>
          <FaTimes/>
        </button>
      </div>
      <ul>
        {links.map((link) => {
          const {id, url, text, icon} = link
          return(
            <li key={id}><a href={url}>{icon}{text}</a></li>
          )
        })}
      </ul>
      <ul className='social-links'>
        {social.map((link) => {
          const {id, url, icon} = link
          return(
            <li key={id}><a href={url}>{icon}</a></li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar