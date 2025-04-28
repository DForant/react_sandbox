import SinglePerson from './SinglePerson'
import { useGlobalContext } from './context'

const List = () => {
    const {people} = useGlobalContext()
    return (
        <>
        {people.map((person) => {

          return(
            <SinglePerson key={person.id} {...person}/>
          )
        })}
        </>
    )
}

export default List