import { useGlobalContext } from './context'

const Title = ({title='Title Here', lineLength}) => {
    const {tours} = useGlobalContext()
    return (
        <>
        <div className='title'>
            <h2>{title}</h2>
            <div className='title-underline' style={{width: `${lineLength}rem`}}></div>
        </div>
        <h3 className='title' style={{marginTop: '2rem'}}>
            {(tours.length===0)?'No':tours.length} tour{(tours.length===1)?'':'s'} available.
        </h3>
        </>
    )
}

export default Title