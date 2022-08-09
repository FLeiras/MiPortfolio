import "./Home.css";
import img from "../props/img2.jpg";
import Button from "../button/Button";
import { BsMouse } from "react-icons/bs";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const toggle = document.querySelector(".main-img");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
    });
  });

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="main-img">
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
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>Sobre Mi</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error
          odit labore saepe maiores, eos alias, tenetur voluptate quod aliquam
          velit iste modi. At repellat accusamus voluptas laudantium sapiente
          temporibus?
        </p>
      </h2>

      <Button />
    </div>
  );
}

export default Home;
