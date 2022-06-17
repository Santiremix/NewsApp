import React from 'react'
import './NewsItem.scss'

const NewsItem = ({title, description, url, urlToImage}) => {
  return (
    <div className='order'>
    <div className='newsCont'>
        <img className='image' src={urlToImage} alt=''></img>
        <h3>
            {title}
        </h3>
        <p>{description}</p>
        <a href={url}>Leer más</a>
    </div>
    </div>
  )
}

export default NewsItem