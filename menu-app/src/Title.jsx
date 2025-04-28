import React from 'react'

const Title = ({title = 'Text Here', lineWidth, nbrItems}) => {
  return (
    <div className='title'>
        <h2>{title}</h2>
        <div className='title-underline' style={{width: `${lineWidth}rem`}}></div>
        <h4 style={{marginTop: '1rem'}}>{nbrItems} Items Available.</h4>
    </div>
  )
}

export default Title