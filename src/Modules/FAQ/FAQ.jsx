
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Styles from "./faq.module.css"

function FAQ(){
    
    return(
        <section className={Styles.seccion}>
            <h3 className={Styles.title}>Preguntas Frecuentes</h3>
            <section className={Styles.acordeon}>
                <div className="accordion accordion-flush justify-content-center aling-items-center" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            ¿Cuál es la duración del curso?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et asperiores dolores qui id adipisci commodi nihil, rerum voluptatibus nulla ipsa, eaque perspiciatis itaque aspernatur totam animi nostrum odit, voluptatem neque.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            ¿Cuál es el costo del curso?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">El curso tiene un costo de xxx$ y puedes pulsando adquirirlo
                         <a href="" className={Styles.vinculo} target='_blank' > aquí </a></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            ¿El curso consta de certificación?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente est assumenda reiciendis molestias accusamus, eius velit vel corrupti dignissimos recusandae! Quasi et amet velit neque soluta dolorem incidunt tempora quo?</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default FAQ;