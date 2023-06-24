import Styles from "./about.module.css"
import foto from "../IMG/retrato.jpg"

function About(){

    return(
        <div className={Styles.div}>
            <section className={Styles.titulo}>
                <h2>Hernán Villar</h2>
            </section>
            <section className={Styles.section}>
                <article>
                    <p>
                            Hace 35 años comenzó mi viaje por la enseñanza, 
                            La fotografía era analógica, pero con el tiempo 
                            fue cambiando a digital y yo con ella, empecé 
                            enseñando técnica e introduciendo ejercicios de 
                            composición, estética y lenguaje visual.
                            mi interrogante siempre fue 
                            ¿porque el arte nos mueve?
                            Siguiendo mi pasión por la psicología me llevó a 
                            explorar como lo arquetipos moldean nuestra 
                            personalidad y le respondemos al mundo, 
                            sabiendo que lo “exterior es solo una excusa para 
                            expresar lo interior”, conectando los arquetipos al 
                            acto creativo, desarrolle un taller sobre 
                            los signos, símbolos y arquetipos. 
                            He enseñado en diversas universidades, 
                            institutos de diseño e instituciones del arte en 
                            la ciudad de New York, Venezuela, Perú y Colombia.
                    </p>
                    <a href="www.ejemplo.com" target='_blank'>
                            <button className="btn btn-danger" >REGÍSTRATE</button>
                    </a>  
                </article>
                <img className={Styles.imagen} src={foto} alt="Retrato de Hernán Villar" />
            </section>
        </div>
    )
}

export default About;