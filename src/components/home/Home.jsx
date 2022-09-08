import { AiOutlineCloudDownload } from "react-icons/ai";
import img from "../props/img2.png";
import Button from "../button/Button";
import { BsMouse } from "react-icons/bs";
import { useState } from "react";
import CV from "../props/Federico Leiras CV.pdf";
import "./Home.css";

function Home() {
  const [toogle, setToogle] = useState(false);

  function handleClick() {
    setToogle(!toogle);
    console.log(toogle);
  }

  return (
    <div id="home" className="container home-container">
      <div onClick={handleClick} className="logo">
        <div className={!toogle ? "main-img" : "main-img active"}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>desplazarse hacia abajo</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>Sobre Mi</span> <br />
        <p>
          Desde muy chico me apasiona la programación, estudie 2 años la carrera
          de Ing. en sistemas en la Universidad de Bs. As. Recorrí diversos
          rubros laborales , vendedor, atención al cliente, empleado de
          producción, telemarketer. Los últimos 15 años me desempeñe como
          técnico informático con atención personalizada al cliente, fusionando
          y aprovechando tanto, mi pasión por la tecnología como la buena
          comunicación que adopte durante estos años. Hoy ya volcado al
          desarrollo web busco una empresa donde pueda dar mis primeros pasos en
          este fantástico mundo de la programación, puedo asegurar que si se me
          da la oportunidad ganaras una persona capaz, autodidacta, flexible,
          responsable y curiosa. Buscador de soluciones optimizadas y
          apasionado.
        </p>
      </h2>
      <a href={CV} download className="nes-btn is-primary">
        <div className="cv-container">
          <AiOutlineCloudDownload className="cv" /> Descarga mi CV
        </div>
      </a>

      <Button />
    </div>
  );
}

export default Home;
