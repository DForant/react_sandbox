import {useState, useRef} from 'react'
import {links, social} from './data'
import {FaBars} from 'react-icons/fa'
import logo from './logo.svg'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    // we set up or refereces here one for the links container and 
    // the other for the links themselves
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)

    const toggleLinks = () =>{
        setShowLinks(!showLinks)
    }

    // We add conditional styling based on the showLinks state value
    // boolean. When the boolean is set to true, we get the width
    // of the links UL element by using the 
    // linksRef.current.getBoundingClientRect().height property.
    const linkStyles = {
        height: showLinks
            ? `${linksRef.current.getBoundingClientRect().height}px`
            : '0px'
    }
  
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} className='logo' alt='logo'/>
                    <button className='nav-toggle' onClick={toggleLinks}>
                       <FaBars/>
                    </button>
                </div>

                {/* We apply the dynamic styling to the links-container div */}
                <div className='links-container' ref={linksContainerRef} style={linkStyles}>
                    {/* Links */}
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const {id, url, text} = link

                            return(
                                <li key={id}><a href={url}>{text}</a></li>
                            )
                        })}
                    </ul>
                </div>
                { /* Social Links */}
                <ul className='social-icons'>
                    {social.map((link) => {
                        const {id, url, icon} = link
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar