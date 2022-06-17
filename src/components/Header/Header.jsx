import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav class='header'>
            <Link to="/"><p class="title">NewsApp</p></Link>
            <div class="nav-links">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/form">FORM</Link></li>
                    <li><Link to="/news">LISTNEWS</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header