import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
    const {openSidebar} = useGlobalContext()

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('nav-link')){
            setPageId(null)
        }
    }

    return (
        <nav onMouseOver={handleSubmenu}>
            <div className='nav-center'>
                <h3 className='logo'>Navbar</h3>
                <button className='toggle-btn' type='button' onClick={openSidebar}> 
                    <FaBars/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar