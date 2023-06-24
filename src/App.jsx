import './App.css';
import About from './Modules/About/About';
import Curso from './Modules/Curso/Curso';
import FAQ from './Modules/FAQ/FAQ';
import Form from './Modules/Form/Form';
import Header from './Modules/Header/Header';
import Footer from './Modules/Footer/Footer';
import {motion, useScroll, useSpring}  from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress); 
 
  return (
    <div>
      <motion.section style={{ scaleX }} />
      <Header />
      <About/>
      <Curso/>
      <FAQ/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App;
