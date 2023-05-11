import "./Qualifications.css";

function Qualifications() {
  return (
    <div className="qualiTotal">
      <span className="quali-text">Mis Habilidades</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <div className="content css"></div>
          <div className="content javascript"></div>
          <div className="content react"></div>
          <div className="content redux"></div>
          <div className="content vue"></div>
        </div>
        <div className="qualification2">
          <div className="content node"></div>
          <div className="content express"></div>
          <div className="content postgresql"></div>
          <div className="content docker"></div>
          <div className="content mongo"></div>
          <div className="content git"></div>
        </div>
      </div> 
    </div>
  );
}

export default Qualifications;
