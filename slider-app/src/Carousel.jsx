import {useState, useEffect} from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {useGlobalContext} from './context'

const Carousel = () => {
    const {people, currentPerson, prevSlide, nextSlide} = useGlobalContext()


    useEffect(() => {
        let sliderId = setInterval(() => {  
            nextSlide()
        }, 5000)
        return() => {
            clearInterval(sliderId)
        }
    }, [currentPerson])

    return (
        <section className='slider-container'>
            {people.map((person, personIndex) => {
                const {id, image, name, title, quote} = person

                return(
                    <article key={id} className='slide'
                        style={{
                            transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
                            opacity: personIndex === currentPerson ? 1 : 0,
                            visibility: personIndex === currentPerson ? 'visible' : 'hidden'
                        }}    
                    >
                        <img src={image} alt={name} className='person-img'/>
                        <h5 className='name'>{name}</h5>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'/>
                    </article>   
                )
            })}
            <button type='button' className='prev' onClick={prevSlide}><FiChevronLeft/></button>
            <button type='button' className='next' onClick={nextSlide}><FiChevronRight/></button>
        </section>
    )
}

export default Carousel