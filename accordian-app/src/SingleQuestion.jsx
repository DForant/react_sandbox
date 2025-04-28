import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
  // set the isActive boolean based on if the id is equal to the active
  // id. This boolean will be used to show the correct Plus/minus icon
  // as well as the display of the paragraph containing the info text
  const isActive = id === activeId
  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          
          {
            // Ternary operationto display the plus or minus icon
            // based on isActive value 
            isActive ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
      </header>
      {
        // Just like the plus/minus icons, we will only show
        // the info paragraph based on the vaue of the isctive
        // variable.
        isActive && <p>{info}</p>
      }
    </article>
  )
}

export default SingleQuestion
