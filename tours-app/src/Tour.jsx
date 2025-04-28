import {useState} from 'react'
import { useGlobalContext } from './context'
const Tour = ({id, name, info, image, price}) => {
    const {removeTour} = useGlobalContext()
    const [showMore, setShowMore] = useState(false)
    return (
        <article key={id} className='single-tour'>
            <img src={image} alt={name} className='img'/>
            <div className='tour-price'>${price}</div>
            <div className='tour-info'>
                <h5>{name}</h5>
                <p>
                    {(!showMore)?`${info.substr(0,200)}... `:info}
                    <button className='info-btn' onClick={() => setShowMore(!showMore)}>
                        show {(!showMore)?'more':'less'}
                    </button>
                </p>
            </div>
            <button className='btn btn-block delete-btn' onClick={() => removeTour(id)}>
                Remove
            </button>
        </article>
    )
}

export default Tour