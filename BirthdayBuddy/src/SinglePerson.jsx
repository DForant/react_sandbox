import { useGlobalContext } from './context'

const SinglePerson = ({id, name, age, image}) => {
  const {removePerson} = useGlobalContext()
  return (
    <article className='grid grid-cols-df-column gap-3 items-center pl-4 mb-6'> 
        <img src={image} alt={name} className='w-[8rem] h-[8rem] rounded-full'/>
        <div>
        <h4 className='text-2xl font-body mb-0'>{name}</h4>
        <p className='mt-1 text-lg'>{age} years old.</p>
        </div>
        <button className='cursor-pointer text-white bg-green-600 border-0 rounded-md h-7 tracking-widest
          hover:shadow-lg hover:bg-green-300 inline-block shadow-sm' 
            onClick={() => removePerson(id)}>
        Remove
        </button>
    </article>
  )
}

export default SinglePerson