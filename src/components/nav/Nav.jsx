import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { useEffect } from "react";

function Nav() {
  useEffect(() => {
    let Icons = document.querySelectorAll(".navigation .icon");
    Icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        changeactive();
        icon.classList.add("active-nav");
      });
    });

    function changeactive() {
      Icons.forEach((icon) => {
        icon.classList.remove("active-nav");
      });
    }
  });

  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon" />
      </a>
      <a href="#sobreMi">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#members">
        <TiGroupOutline className="icon" />
      </a>
      <a href="#contacto">
        <BiMessageRoundedDots className="icon" />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon" />
      </a>
    </div>
  );
}

export default Nav;
