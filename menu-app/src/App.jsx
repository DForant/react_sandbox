import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'
import { useGlobalContext } from './context'

function App() {
  const {menuItems} = useGlobalContext()

  return (
    <main>
      <section className='menu'>
        <Title title='Our Menu' lineWidth='15' nbrItems={menuItems.length}/>
        <Categories/>
        <Menu menuItems={menuItems}/>
      </section>
    </main>
  )
}

export default App
