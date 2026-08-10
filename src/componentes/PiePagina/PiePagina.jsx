import estilos from "./PiePagina.module.css";

import {
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { useIdioma } from "../../contexto/IdiomaContext";

function PiePagina() {
    const { idioma } = useIdioma();

    return (
        <footer>

            <div className={estilos.contenedor}>

                <div className={estilos.marca}>

                    <h2>RODO BARUA</h2>

                    <span>
                        {idioma === "es"
                            ? "CONDUCTOR PRIVADO"
                            : "PRIVATE DRIVER"}
                    </span>

                    <p>
                        {idioma === "es"
                            ? "Traslados privados, ejecutivos y turísticos en la Ciudad de Buenos Aires."
                            : "Private, executive and tourist transfers in the city of Buenos Aires."}
                    </p>

                </div>


                <div className={estilos.enlaces}>

                    <h3>
                        {idioma === "es"
                            ? "Navegación"
                            : "Navigation"}
                    </h3>

                    <a href="#inicio">
                        {idioma === "es"
                            ? "Inicio"
                            : "Home"}
                    </a>

                    <a href="#servicios">
                        {idioma === "es"
                            ? "Servicios"
                            : "Services"}
                    </a>

                    <a href="#turismo">
                        {idioma === "es"
                            ? "Turismo"
                            : "Tourism"}
                    </a>

                    <a href="#resenas">
                        {idioma === "es"
                            ? "Reseñas"
                            : "Reviews"}
                    </a>

                    <a href="#contacto">
                        {idioma === "es"
                            ? "Contacto"
                            : "Contact"}
                    </a>

                </div>


                <div className={estilos.contacto}>

                    <h3>
                        {idioma === "es"
                            ? "Contacto"
                            : "Contact"}
                    </h3>

                    <a
                        href="https://wa.me/5491124627189"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaWhatsapp />
                        WhatsApp
                    </a>

                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                        Instagram
                    </a>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=rodolfobarua24@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaEnvelope />
                        Email
                    </a>

                    <p>
                        <FaMapMarkerAlt />
                        Buenos Aires, Argentina
                    </p>

                </div>

            </div>


            <div className={estilos.linea}></div>


            <div className={estilos.copy}>

                <p>
                    © 2026 Rodo Private Driver.{" "}
                    {idioma === "es"
                        ? "Todos los derechos reservados."
                        : "All rights reserved."}
                </p>

            </div>

        </footer>
    );
}

export default PiePagina;