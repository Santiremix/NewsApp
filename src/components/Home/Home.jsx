import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <>
    <div className='home'>
    <div>
      <Link to="/news">
        <button type="button">
          Leer Noticias
        </button>
      </Link>
      
      <Link to="/form">
        <button type="button">
          Crear Noticias
        </button>
      </Link>
      </div>
    </div>
    </>
  )
}

export default Home