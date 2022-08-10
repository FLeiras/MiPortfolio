import "./Button.css";

function Button() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Mas Info
      </a>
      <a href="#contac" className="btn sec">
        Contactame
      </a>
    </div>
  );
}

export default Button;
