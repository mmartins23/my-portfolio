import Logo from '../../assets/logo.jpeg';
import data from './data';
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => (
              <li key={item.id}><a href={item.link}>{item.title}</a></li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar