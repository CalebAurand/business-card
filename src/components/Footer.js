import linkedin from '../linkedin.svg';
import github from '../github.svg';

const Footer = () => {
  return(
    <footer>
      <span><a href="https://www.linkedin.com/in/caleb-aurand-23938a161/"><img src={linkedin} alt="linked in icon" /></a></span>
      <span><a href="https://github.com/CalebAurand"><img src={github} alt="github icon" /></a></span>
    </footer>
  )
}

export default Footer;