import headshot from '../headshot1.jpg';
import email from '../email.svg';
import linkedin from '../linkedin.svg';

const Header = () => {
  return (
    <header className="header">
      
      <img src={headshot} alt="headshot of dev" className="headshot" />
      <div className="header-content">
        <h2>Caleb Aurand</h2>
        <p className="job-title">Web Developer</p>
        <div className="website-box">
          <p>
          <span>Portfolio: </span>
          <address>
          caleba.dev
          </address>
          </p>
        </div>
        <section className="button-container">
          <a href="mailto:caurand13@gmail.com">
            <button className="email">
            
              <img src={email} alt="email icon svg" className="email-img" />
            Email
            
          </button>
          </a>
          <a href="https://www.linkedin.com/in/caleb-aurand-23938a161/" target="blank">
            <button className="linked-in">
              <img src={linkedin} alt="linked in icon" className="linkedin-img" />
            LinkedIn
            </button>
          </a>
        </section>
      </div>
          
    </header>
  )
}

export default Header;