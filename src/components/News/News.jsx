import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './News.scss'

const News = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);

  const article = news.map((article) => {
    return (
      <div className='newsCont'>
          <img className='image' src={article.urlToImage} alt=''></img>
          <h3>
              {article.title}
          </h3>
          <p>{article.description}</p>
          <a href={article.url}>Leer más</a>
      </div>  
    );
  });
  return (<div className="order">{article}</div>);
};

export default News;
