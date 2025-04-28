import { useState } from 'react'
import data from './data'
import Questions from './Questions'

function App() {
  const [questions, setQuestions] = useState(data)
  // The activeId state value is used to store the current id 
  // of the  question.
  const [activeId, setActiveId] = useState(null)

  // The toggleQuestion function will take in the id parameter and use
  // it to compare against the activeId. The toggleQuestion function
  // will be called on the onClick event of the single question button
  // If the id matches the active id set the newActiveId to null 
  // otherwise set it to the id that was passed in from the onClick call
  // This ensures that only the single question that got clicked will appear.
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  )
}

export default App
