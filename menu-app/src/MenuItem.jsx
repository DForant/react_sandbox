const MenuItem = ({title, img, price, desc}) => {
  return (
    <div className='menu-item'>
    <img src={img} alt={title} className='img'/>    
        <article className='item-info'>
            <header>
                <h5>{title}</h5>
                <span className='item-price'>${price}</span>
                <p className='title-text'>{desc}</p>
            </header>
        </article>        
    </div>
  )
}

export default MenuItem