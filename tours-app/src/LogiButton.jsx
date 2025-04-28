import { useGlobalContext } from './context'

const LogiButton = () => {
    const {tours, resetTours, clearTours} = useGlobalContext()
    return (
        <div className='title'>
            <button className='btn' 
            onClick={() => (tours.length===0)?resetTours():clearTours()}>
                {(tours.length===0)?'Reset':'Clear'} Tours
            </button>
        </div>
    )
}

export default LogiButton