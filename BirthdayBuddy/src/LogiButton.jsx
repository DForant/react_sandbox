import { useGlobalContext } from './context'

const LogiButton = () => {
    const {people, resetPeople, clearPeople} = useGlobalContext()
    return (
        <div className='m-4'>
            <button className='cursor-pointer text-white bg-purple-600 border-0 rounded-md h-7 tracking-widest
                hover:shadow-lg hover:bg-purple-300 w-full inline-block' onClick={() => (people.length===0)?resetPeople():clearPeople()}>
                    {(people.length===0)?'Reset':'Clear'} People
            </button>
        </div>
    )
}

export default LogiButton