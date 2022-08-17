import "./Proyects.css";

function Proyects() {
  return (
    <div id="proyects" className="container proyects-container">
      <h1 className="proyect-txt">Proyectos</h1>

      <div className="proyect proyect-1">
        <a href="https://henrys-app.vercel.app/" target="_blank">
          <div className="proyect-img1"></div>
        </a>
        <div className="proyect-info">
          <h1 className="name">Federico Leiras</h1>
          <h3 className="position">Desarrollo Front-End</h3>
          <h4 className="about">
            Henry´s App, es el proyecto con el cual me gradue del Bootcamp de
            Soy Henry, fue desarrollada por quien les habla y 7 compañeros en el
            lapso de 28 días. Henry´s App es un e-commerce pensado para
            facilitar, agilizar y aumentar tanto la experiencia del usuario como
            la de sus empleados y administrador. La misma cuenta con una
            pasarella de pago para hacer mas segura y confiable la compra. Las
            tecnologias utilizadas fueron, JavaScript, React.js, Redux,
            PostgreSQL, Sequalize, Express, Boostrap, Material UI.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contacto</span>
          </a>
        </div>
      </div>

      <div className="proyect proyect-2">
        <a href="https://countries-fleiras.vercel.app/" target="_blank">
          <div className="proyect-img2"></div>
        </a>
        <div className="proyect-info">
          <h1 className="name">Federico Leiras</h1>
          <h3 className="position">Desarrollo Full-Stack</h3>
          <h4 className="about">
            SPA(Simple Page Application), donde podras hacer un recorrido por
            todos los paises del Planeta, los cuales podras ordenarlos segun
            varios criterios, filtrarlos segun su continente o actividad
            turistica.Tambien podras crear una actividad turistica para el o los
            paises que desees.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contacto</span>
          </a>
        </div>
      </div>

      <div className="proyect proyect-3">
        <a href="https://fedeweather-app.netlify.app/" target="_blank">
          <div className="proyect-img3"></div>
        </a>
        <div className="proyect-info">
          <h1 className="name">Federico Leiras</h1>
          <h3 className="position">Desarrollo Full-Stack</h3>
          <h4 className="about">
            Primer sitio web creado solo por mi utilizando React/React Router,
            JS, CSS. En el sitio el usuario puede consultar el clima actual de
            la ciudad deseada. Cuenta con varias rutas una de ellas es "Sobre
            Mi", donde podra encontrar información de contacto. Me gustaria
            agregar que soy consciente de la falta de Responsive Web Design
            (RWD), actualmente estoy en aprendizaje autodidacta de dicho campo.
          </h4>
          <a href="#contact" className="contact-member">
            <span>Contacto</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
