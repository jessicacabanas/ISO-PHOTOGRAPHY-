import Test from "./Test";
import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";

const App = () => {
  return <div>
   <section id="Homepage">
<Navbar/>
<Hero/>
    </section>
<section id="Projects"><Parallax type="projects"/></section>
<section><Projects/></section>
<section id="Services"><Services/></section>
<section id="Contact"><Contact/></section>


{/*<Test/>
<Test/>*/}

  </div>;
};

export default App;
