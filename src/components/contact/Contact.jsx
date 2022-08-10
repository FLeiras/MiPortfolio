import "./Contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a href="" className="contact whatsapp">
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+54 9 11-6606-7670</span>
          </h2>
        </a>
        <a href="" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>fedeleiras</span>
          </h2>
        </a>
        <a href="" className="contact e-mail">
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
