import 'bootstrap/dist/css/bootstrap.css';
import Styles from "./Header.module.css"
import foto from "../IMG/foto1.jpg"
import { motion } from 'framer-motion';

function Header(){


    return(
    <div className={Styles.section}>
        <section>
            <motion.h1 className={Styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >Creative Photo Center</motion.h1>
        </section>
        <section className={Styles.info}>
            <article className='col-4'>
                <motion.h3 className='text-center'
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    exit={{ x: -100 }}
                    transition={{ duration: 1 }}
                >
                    Los 8 Ejercicios que cambiaran tu manera de ver 
                    y hacer fotografía.
                </motion.h3>
                <a href="" className={Styles.a} target="_blank" download >
                <h2 className={Styles.subTitle}>PDF Gratuito</h2>
                </a>
                <section className={Styles.btn}>
                    <article className='btn' >
                        <a href="www.ejemplo.com" target='_blank'>
                            <button className="btn btn-danger" >REGÍSTRATE</button>
                        </a>       
                    </article>
                </section>
            </article>
            <img src={foto} alt="Foto de presentación"  className={Styles.foto}/>
        </section>
        <section>
            <p className={Styles.parraf}>Atrévete a probar otra manera de hacer fotografía</p>
        </section>
    </div>
    )
}

export default Header;