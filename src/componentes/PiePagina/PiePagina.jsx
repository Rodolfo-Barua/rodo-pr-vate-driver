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
        <footer className={estilos.footer}>

            <div className={estilos.contenedor}>

                {/* MARCA */}

                <div className={estilos.marca}>

                    <h2>RODO BARUA</h2>

                    <span>
                        {idioma === "es"
                            ? "CONDUCTOR PRIVADO"
                            : idioma === "en"
                            ? "PRIVATE DRIVER"
                            : "MOTORISTA PARTICULAR"}
                    </span>

                    <p>
                        {idioma === "es"
                            ? "Traslados privados, ejecutivos y turísticos en la Ciudad de Buenos Aires."
                            : idioma === "en"
                            ? "Private, executive and tourist transfers in Buenos Aires."
                            : "Traslados privados, executivos e turísticos na cidade de Buenos Aires."}
                    </p>

                </div>


                {/* NAVEGACIÓN */}

                <div className={estilos.enlaces}>

                    <h3>
                        {idioma === "es"
                            ? "Navegación"
                            : idioma === "en"
                            ? "Navigation"
                            : "Navegação"}
                    </h3>


                    <a href="#inicio">
                        {idioma === "es"
                            ? "Inicio"
                            : idioma === "en"
                            ? "Home"
                            : "Início"}
                    </a>


                    <a href="#servicios">
                        {idioma === "es"
                            ? "Servicios"
                            : idioma === "en"
                            ? "Services"
                            : "Serviços"}
                    </a>


                    <a href="#turismo">
                        {idioma === "es"
                            ? "Turismo"
                            : idioma === "en"
                            ? "Tourism"
                            : "Turismo"}
                    </a>


                    <a href="#resenas">
                        {idioma === "es"
                            ? "Reseñas"
                            : idioma === "en"
                            ? "Reviews"
                            : "Avaliações"}
                    </a>


                    <a href="#contacto">
                        {idioma === "es"
                            ? "Contacto"
                            : idioma === "en"
                            ? "Contact"
                            : "Contato"}
                    </a>

                </div>


                {/* CONTACTO */}

                <div className={estilos.contacto}>

                    <h3>
                        {idioma === "es"
                            ? "Contacto"
                            : idioma === "en"
                            ? "Contact"
                            : "Contato"}
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


            {/* LINEA */}

            <div className={estilos.linea}></div>


            {/* COPYRIGHT */}

            <div className={estilos.copy}>

                <p>
                    © 2026 Rodo Private Driver.
                    {" "}

                    {idioma === "es"
                        ? "Todos los derechos reservados."
                        : idioma === "en"
                        ? "All rights reserved."
                        : "Todos os direitos reservados."}
                </p>

            </div>

        </footer>
    );
}

export default PiePagina;