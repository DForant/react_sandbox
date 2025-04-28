const SingleItem = ({item, editItem, removeItem}) => {
  return (
    <article className='single-item'>
      <input type='checkbox' checked={item.completed} onChange={() => editItem(item.id)}/>
      <p style={{textTransform: 'capitalize', textDecoration: item.completed && 'line-through'}}>{item.name}</p>
      <button type='button' className='btn btn-remove' onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </article>
  )
}

export default SingleItem