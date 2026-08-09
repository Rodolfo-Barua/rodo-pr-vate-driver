import estilos from "./PorqueElegirme.module.css";

import {
FaShieldAlt,
FaClock,
FaStar,
FaUserCheck,
} from "react-icons/fa";

function PorqueElegirme() {
return (
    <section id="porque" className={estilos.porque}>

    <h2>¿Por qué elegir RODO PRIVATE DRIVER?</h2>

    <p className={estilos.subtitulo}>
        Mi compromiso es brindar un servicio seguro, puntual y personalizado,
        para que disfrutes cada traslado con total tranquilidad.
    </p>

    <div className={estilos.contenedor}>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaShieldAlt />
        </div>

        <h3>Seguridad</h3>

        <p>
            Vehículo habilitado y servicio confiable para que viajes con total tranquilidad.
        </p>

        </div>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaClock />
        </div>

        <h3>Puntualidad</h3>

        <p>
            Compromiso con los horarios para que llegues siempre a tiempo.
        </p>

        </div>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaStar />
        </div>

        <h3>10 años de experiencia</h3>

        <p>
            Más de una década realizando traslados privados, ejecutivos y turísticos.
        </p>

        </div>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaUserCheck />
        </div>

        <h3>Atención personalizada</h3>

        <p>
            Cada viaje se adapta a las necesidades de cada pasajero para brindar una experiencia única.
        </p>

        </div>

    </div>

    </section>
);
}

export default PorqueElegirme;