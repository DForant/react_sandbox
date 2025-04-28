import MenuItem from './MenuItem'
import { useGlobalContext } from './context'

const Menu = () => {
  const {menuItems} = useGlobalContext()

  return (
    <div className='section-center'>
        {menuItems.map((item) => {
            return(
                <MenuItem key={item.id} {...item}/>
            )
        })}
    </div>
  )
}

export default Menu