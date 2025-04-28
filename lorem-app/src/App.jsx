import {useState} from 'react'
import data from './data'
import { nanoid } from 'nanoid'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h4>Tired of boring ipsums</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='number'>Paragraphs: </label>
        <input type='number' name='amount' id='amount'
          min='1' max='8' step='1' value={count} onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return(
            <p key={nanoid()}>{item}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App
