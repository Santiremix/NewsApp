import React from 'react'
import { useState } from 'react';
import './Form.scss'
import {useNavigate} from 'react-router-dom'

const Form = () => {
  let newsInfo = JSON.parse(localStorage.getItem("ADDED NEW")) || [];
  const saveData = () => {
    newsInfo.push(data);
    localStorage.setItem("ADDED NEW", JSON.stringify(newsInfo));
  };
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState("");

  const initialState = {
    urlToImage: "",
    title: "",
    description: "",
    url: "",
  };

  const [data, setData] = useState(initialState);

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.title.length < 2) {
      setMessage("El título tiene que tener al menos 3 caracteres.");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };

let navegate = useNavigate();

  const handleSubmit = (event) => {
    setBtnDisabled();
    event.preventDefault();
    saveData();
    clearState();
    setMessage("Mensaje enviado correctamente." + ' Redirigiendo...');
    setTimeout(()=>{
      navegate('/news')
  },1500)
  };


  return (
    <>
  <div className='cont'>
    <h1>Añade tu propia publicación!</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        onChange={handleInputChange}
        name="urlToImage"
      />
      <input
        type="text"
        placeholder="Title"
        onChange={handleInputChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={handleInputChange}
        name="description"
      />
      <input
        type="text"
        placeholder="Url"
        onChange={handleInputChange}
        name="url"
      />
      <button type="submit" disabled={btnDisabled}>Publicar</button>
      <span className="Message">{message}</span>
</form>
</div>
</>
  )
};

export default Form;