import estilos from "./PorqueElegirme.module.css";

import {
    FaShieldAlt,
    FaClock,
    FaStar,
    FaUserCheck,
} from "react-icons/fa";

import { useIdioma } from "../../contexto/IdiomaContext";

function PorqueElegirme() {
    const { idioma } = useIdioma();

    return (
        <section className={estilos.porqueElegirme}>

            <h2>
                {idioma === "es"
                    ? "¿Por qué elegir RODO PRIVATE DRIVER?"
                    : "Why choose RODO PRIVATE DRIVER?"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Mi compromiso es brindar un servicio seguro, puntual y personalizado, para que disfrutes cada traslado con total tranquilidad."
                    : "My commitment is to provide a safe, punctual and personalized service, so you can enjoy every transfer with complete peace of mind."}
            </p>

            <div className={estilos.contenedor}>

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaShieldAlt />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Seguridad"
                            : "Safety"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Vehículo habilitado y servicio confiable para que viajes con total tranquilidad."
                            : "Licensed vehicle and reliable service so you can travel with complete peace of mind."}
                    </p>

                </div>


                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaClock />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Puntualidad"
                            : "Punctuality"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Compromiso con los horarios para que llegues siempre a tiempo."
                            : "Committed to keeping schedules so you always arrive on time."}
                    </p>

                </div>


                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaStar />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "10 años de experiencia"
                            : "10 years of experience"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Más de una década realizando traslados privados, ejecutivos y turísticos."
                            : "More than a decade providing private, executive and tourist transfers."}
                    </p>

                </div>


                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaUserCheck />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Atención personalizada"
                            : "Personalized service"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Cada viaje se adapta a las necesidades de cada pasajero para brindar una experiencia única."
                            : "Every trip is tailored to each passenger's needs to provide a unique experience."}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default PorqueElegirme;