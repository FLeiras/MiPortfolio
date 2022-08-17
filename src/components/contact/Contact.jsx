import "./Contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contactame</h1>
      <div className="contact-links">
        <a
          href="https://api.whatsapp.com/send?phone=1166067670"
          className="contact whatsapp"
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+54 9 11-6606-7670</span>
          </h2>
        </a>
        <a
          href="https://www.linkedin.com/in/fede-leiras/"
          className="contact linkedin"
          target="_blank"
        >
          <AiOutlineLinkedin className="icon" />
          <h2>
            linkedin <span>fedeleiras</span>
          </h2>
        </a>
        <a href="mailto:fleiras18@gmail.com" className="contact e-mail">
          <AiOutlineMail className="icon" />
          <h2>
            E-mail <span>fleiras18@gmail.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
