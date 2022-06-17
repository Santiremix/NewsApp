import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsItem from '../NewsItem/NewsItem'
import Header from '../Header/Header'
import './ListNews'

const ListNews = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=08dba1af01694558b0b6dd5cfd3ea0eb")
            setArticles(res.data.articles);
            // console.log(res)
        }
        getArticles();
    }, []);

  return (
    <>
        <div className='order'>
        {articles.map(({title, description, url, urlToImage}) => (
        <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} />
        ))}
        </div>
    </>
  )
}

export default ListNews