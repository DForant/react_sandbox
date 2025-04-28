import {useState} from 'react'
import {toast} from 'react-toastify'

const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!newItemName){
            toast.error('Please enter an item')
            return
        }
        addItem(newItemName)
        setNewItemName('')
        console.log('Item Added')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Buddy</h4>
            <div className='form-control'>
                <input type='text' className='form-input' value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}/>
                <button type='submit' className='btn'>
                    Add Item
                </button>
            </div>
        </form>
    )
}

export default Form