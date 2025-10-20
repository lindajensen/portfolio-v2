import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

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
          <FaFacebookSquare className="contact__socials-icon" size={35} />
        </a>
        <a
          className="contact__socials-link"
          href="https://www.instagram.com/jensenvbg/"
          target="_blank"
        >
          <FaInstagramSquare className="contact__socials-icon" size={35} />
        </a>
        <a
          className="contact__socials-link"
          href="https://www.linkedin.com/in/linda-jensen-swe/"
          target="_blank"
        >
          <FaLinkedin className="contact__socials-icon" size={35} />
        </a>
        <a
          className="contact__socials-link"
          href="https://github.com/lindajensen"
          target="_blank"
        >
          <FaGithubSquare className="contact__socials-icon" size={35} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
