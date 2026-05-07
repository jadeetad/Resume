import heroImg from '../assets/hero-img.jpeg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Oghenekevwe Jade Etaduovie</h1>
        <h3>
          Frontend Developer Intern | UI/UX Design Intern | Digital Product Builder
        </h3>
        <div className="contact-line">
          <a href="mailto:jadeetad@jadeetad.com">jadeetad@jadeetad.com</a>
          <span>|</span>
          <span>08028739017</span>
          <span>|</span>
          <a href="https://github.com/jadeetad" target="_blank" rel="noreferrer">
            GitHub: jadeetad
          </a>
        </div>
        <div className="buttons">
          <a href="#projects" className="btn btn-blue">Explore My Work</a>
          <a href="/Jade_Etaduovie_Resume.pdf" className="btn btn-white" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="Oghenekevwe Jade Etaduovie" />
      </div>
    </section>
  );
}
