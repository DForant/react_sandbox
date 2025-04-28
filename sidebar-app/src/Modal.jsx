import{FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  // We pull the isModalOpen value and closeModal function from
  // our global context
  const {isModalOpen,closeModal} = useGlobalContext()
  return (
    /*
    Here, we use a ternary operator to display the show-modal dependent on 
    if the isModalOpen value is true or not. 
    */
    <div className={isModalOpen?'modal-overlay show-modal':'modal-overlay'}>
      <div className='modal-container'>
        <h3>Modal Content</h3>
        {
        /*
        Here, we add a button that will call the closeModal function which will
        set the isModalOpen value to false, thus closing the modal display. 
        */
        }
        <button type='button' className='close-modal-btn' onClick={closeModal}>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal