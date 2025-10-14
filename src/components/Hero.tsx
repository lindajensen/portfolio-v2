function Hero() {
  return (
    <div className="hero">
      <img className="hero__image" src="/src/assets/img/portrait.png" alt="" />
      <div className="hero__content">
        <h1 className="hero__title">
          Hello, I'm <span>Linda</span>
        </h1>
        <p className="hero__text">
          Tech-loving teacher that's trying to trade in her whiteboard for a
          keyboard
        </p>
        <a
          className="hero__button"
          href="resume.pdf"
          download="Linda Jensen - Resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
