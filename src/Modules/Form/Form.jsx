import { useState } from "react"
import Styles from "./form.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import {motion} from 'framer-motion'

function Form(){

    const [input, setInput] = useState({
        name: "",
        email: "",

    });

    const response = async() => {
        try{
            await axios.post({
                name: input.name,
                email: input.email,
            })
        } catch(error) {
            console.error(error)
        }
    }

    
    const handleChange = event => {

        const {name, value} = event.target;
        setInput({...input, [name]: value
        });

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        response();

        setInput({
            name: "",
            email: "",
        })
    }


    return(
        <motion.section className={Styles.formulario}>
            <h2>Contacto</h2>
            <section className={Styles.seccion}>
                <article className={Styles.info}>
                    <p>
                       Si el curso es de tu interés y quieres más información ponte en contacto conmigo
                    </p>
                </article>
                <form action="" onSubmit={handleSubmit} className={Styles.formm}>
                    <article className={Styles.art}>
                        <label htmlFor="">Nombre:</label>
                        <input value={input.name} type="text" name="name" onChange={handleChange} />
                    </article>
                    <article className={Styles.art}>
                        <label htmlFor="">Email:</label>
                        <input value={input.email} type="text" name="email" onChange={handleChange}/>
                    </article>
                    <button className="btn btn-danger" type="submit">Enviar</button>
                </form>
            </section>
        </motion.section>
    )
}

export default Form