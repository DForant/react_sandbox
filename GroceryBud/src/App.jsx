import {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify'
import {nanoid} from 'nanoid'
import 'react-toastify/dist/ReactToastify.css'
import Form from './Form'
import Items from './Items'

// We set up out local storage here
const getLocalStorage = () => {
  // first, we set up a list variable to be used to get our
  // current local storage value with the key of 'list'
  let list = localStorage.getItem('list')
  // If we find a list object we parse it to a json object, 
  // otherise, we set it as an empty array
  if(list){
    list = JSON.parse(localStorage.getItem('list'))
  } else{
    list = []
  }
  // we return out list
  return list
}

// Set our items to local storage
const setLocalStorage = (items) => {
  // Basically we jsut use setItem and add the stringify the items
  // state value and send it to the list key in local storage.
  localStorage.setItem('list', JSON.stringify(items))
}

// Here, we set the defaultList variable either the contents of the list 
// in local storage or an empty array which will be set as the default state
// value
const defaultList = JSON.parse(localStorage.getItem('list') || '[]')



function App() {
  // notice that the default value uses the defaultList variable
  const [items, setItems] = useState(defaultList)

  // Add Item
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid()
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    // Set items to local storage
    setLocalStorage(newItems)
    toast.success('New Item Added successfully')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    // Set items to local storage
    setLocalStorage(newItems)
    toast.success('Item Removed successfully.')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId){
        const newItem = {...item, completed: !item.completed}
        return newItem
      }
      return item 
    })
    setItems(newItems)
    // Set items to local storage
    setLocalStorage(newItems)
  }

  return (
    <main className='section-center'>
      <Form addItem={addItem}/>
      <Items items={items} editItem={editItem} removeItem={removeItem}/>
      <ToastContainer position='top-center' autoClose={2000} hideProgressBar={true}/>
    </main>
  )
}

export default App
