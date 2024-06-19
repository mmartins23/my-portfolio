import HeaderImage from '../../assets/header-img.png';
import data from './data';
import './header.css';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt='Profile Img' />
        </div>
        <h3>Marlon Martins</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, mollitia? Ipsum dolorem repudiandae alias quo assumenda officia, ipsa ex voluptates quaerat repellat, non nulla eaque iure sint cupiditate qui dolores!</p>
        <div className='header__cta'>
          <a href='#contact'>Let's talk</a>
          <a href='#portfolio'>My Work</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => (
              <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>
            ))
          }
        </div>
      </div>
    </header>
  )
}

export default Header