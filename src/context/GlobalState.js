import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
  news: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getNews = async () => {
        const res = await axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=08dba1af01694558b0b6dd5cfd3ea0eb");
       
        dispatch({
          type: "GET_NEWS",
          payload: res.data.articles,
        });
    }  
    return (
        <GlobalContext.Provider
          value={{
            news: state.news,
            getNews,
          }}
        >
          {children}
        </GlobalContext.Provider>
      );
    
      
}