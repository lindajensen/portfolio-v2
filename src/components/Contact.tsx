function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">
        Say <span className="contact__title-highlight">Hello</span>
      </h2>
      <address className="contact__address">
        <a className="contact__email" href="mailto:linda.jensen81@me.com">
          linda.jensen81@me.com
        </a>
      </address>

      <div className="contact__socials">
        <a
          className="contact__socials-link"
          href="https://www.facebook.com/linda.jensen.5872"
          target="_blank"
        >
          <img
            className="contact__socials-icon"
            src="/src/assets/img/facebook-icon.png"
            alt="Facebook"
            width="30"
          />
        </a>
        <a
          className="contact__socials-link"
          href="https://www.instagram.com/jensenvbg/"
          target="_blank"
        >
          <img
            className="contact__socials-icon"
            src="/src/assets/img/instagram-icon.png"
            alt="Instagram"
            width="30"
          />
        </a>
        <a
          className="contact__socials-link"
          href="https://www.linkedin.com/in/linda-jensen-swe/"
          target="_blank"
        >
          <img
            className="contact__socials-icon"
            src="/src/assets/img/linkedin-icon.png"
            alt="LinkedIn"
            width="30"
          />
        </a>
      </div>
    </section>
  );
}

export default Contact;
