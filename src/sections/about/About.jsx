import AboutImage from '../../assets/about-me.png';
import CV from '../../assets/Resume.pdf';
import { HiDownload } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Img" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards"></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique dolore ea soluta iure natus architecto quidem blanditiis expedita inventore at consequuntur rem, ratione iste cum saepe reprehenderit dolores nam excepturi!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur deserunt culpa exercitationem dolorem, sequi eaque aliquid numquam doloribus! Quas quam magni aspernatur quo cum aliquid pariatur quasi iste. Sit, totam!</p>
          <a href={CV} className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About