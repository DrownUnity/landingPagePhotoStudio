import Styles from "./curso.module.css"
import lens from "../IMG/lens1.png"
import lens2 from "../IMG/lens2.png"
import camera from "../IMG/camera1.png"

function Curso(){

    return(
        <section className={Styles.curso}>
            <section className={Styles.info}>
                <h2>Sobre el Curso</h2>
                <section  className={Styles.seccion}>
                    <article className={Styles.art}>
                        <img className={Styles.imagen} src={lens} alt="Referencia 1" />
                        <p>
                            Ya sabes la técnica, pero andas en búsqueda de algo más?. ¿Que fotografío? 
                            ¿Como hago mis fotos más interesantes? 
                            ¿Como hago que sean diferentes y llamen la atención? ¿Como veo diferente?
                        </p>
                    </article>
                    <article className={Styles.art}>
                        <img className={Styles.imagen} src={lens2} alt="Referencia 2" />
                        <p>
                            Te muestro como con técnicas sencillas de lenguaje visual, 
                            puedes cambiar radicalmente tu manera de hacer fotografía 
                            y hacerla más poética e interesante. 
                            No necesitas ser un experto 
                            Incluso empezando en la fotografía
                            Atrevete solo hacen faltas las ganas de cambiar.
                        </p>
                    </article>
                    <article className={Styles.art}>
                        <img className={Styles.imagen} src={camera} alt="Referencia 3" />
                        <p className={Styles.parrafo}>Con los 8 ejercicos del curso cambiaran tu forma de ver y hacer fotografía, teniendo un enfoque que resalte más tu estética</p>
                    </article>
                </section>
            </section>
        </section>
            
    )
}

export default Curso