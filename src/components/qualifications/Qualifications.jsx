import "./Qualifications.css";

function Qualifications() {
  return (
    <div>
      <span className="quali-text">Mis Habilidades</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>HTML</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content node"></div>
          <h1>node</h1>
        </div>
        <div className="qualification">
          <div className="content express"></div>
          <h1>express</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content redux"></div>
          <h1>redux</h1>
        </div>
        <div className="qualification">
          <div className="content postgresql"></div>
          <h1>postgresql</h1>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
