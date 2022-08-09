import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

function WebContent() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>

      <Header />
      <Nav />
      <Home />
      <About />
    </>
  );
}

export default WebContent;
