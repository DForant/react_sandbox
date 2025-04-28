import Tour from './Tour'
import { useGlobalContext } from './context'

const Tours = () => {
  const {tours, removeTour} = useGlobalContext()
  return (
    <section className='tours'>
        {tours.map((tour) => {
            return(
                <Tour key={tour.id} {...tour}/>
            )
        })}
    </section>
  )
}

export default Tours