import estilos from "./PiePagina.module.css";

import {
FaWhatsapp,
FaInstagram,
FaEnvelope,
FaMapMarkerAlt,
} from "react-icons/fa";

function PiePagina() {
return (
    <footer className={estilos.footer}>

    <div className={estilos.contenedor}>

        <div className={estilos.marca}>

        <h2>RODO BARUA</h2>

        <span>CONDUCTOR PRIVADO</span>

        <p>
            Traslados privados, ejecutivos y turísticos
            en la Ciudad de Buenos Aires.
        </p>

        </div>


        <div className={estilos.enlaces}>

        <h3>Navegación</h3>

        <a href="#inicio">Inicio</a>

        <a href="#servicios">Servicios</a>

        <a href="#turismo">Turismo</a>

        <a href="#resenas">Reseñas</a>

        <a href="#contacto">Contacto</a>

        </div>


        <div className={estilos.contacto}>

        <h3>Contacto</h3>

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
        © 2026 Rodo Private Driver. Todos los derechos reservados.
        </p>

    </div>

    </footer>
);
}

export default PiePagina;