import { useGlobalContext } from './context'

const Title = () => {
    const {people} = useGlobalContext()
    return (
        <>
        <div>
          <h2 className='text-center text-4xl mb-0 text-red-500 uppercase font-semibold 
            font-display tracking-[.5rem]'>
              Birthday Buddy
          </h2>
          <div className='w-[25rem] h-1 my-0 mx-auto bg-red-500'></div>
        </div>
        <h3 className=' text-center text-gray-600 upppercase text-3xl text-body mb-8 mt-4 
          tracking-[.25rem] font-display'>
            {(people.length===0)?'No':people.length} Birthday{(people.length===1)?'':'s'} Today!!!
        </h3>
        </>
    )
}

export default Title