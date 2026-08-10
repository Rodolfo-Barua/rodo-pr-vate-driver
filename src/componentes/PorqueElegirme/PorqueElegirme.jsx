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
                    : idioma === "en"
                    ? "Why choose RODO PRIVATE DRIVER?"
                    : "Por que escolher a RODO PRIVATE DRIVER?"}
            </h2>


            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Mi compromiso es brindar un servicio seguro, puntual y personalizado, para que disfrutes cada traslado con total tranquilidad."
                    : idioma === "en"
                    ? "My commitment is to provide a safe, punctual and personalized service, so you can enjoy every transfer with complete peace of mind."
                    : "Meu compromisso é oferecer um serviço seguro, pontual e personalizado, para que você aproveite cada traslado com total tranquilidade."}
            </p>


            <div className={estilos.contenedor}>

                {/* SEGURIDAD */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaShieldAlt />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Seguridad"
                            : idioma === "en"
                            ? "Safety"
                            : "Segurança"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Vehículo habilitado y servicio confiable para que viajes con total tranquilidad."
                            : idioma === "en"
                            ? "Licensed vehicle and reliable service so you can travel with complete peace of mind."
                            : "Veículo habilitado e serviço confiável para que você viaje com total tranquilidade."}
                    </p>

                </div>


                {/* PUNTUALIDAD */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaClock />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Puntualidad"
                            : idioma === "en"
                            ? "Punctuality"
                            : "Pontualidade"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Compromiso con los horarios para que llegues siempre a tiempo."
                            : idioma === "en"
                            ? "Committed to keeping schedules so you always arrive on time."
                            : "Compromisso com os horários para que você chegue sempre no horário."}
                    </p>

                </div>


                {/* EXPERIENCIA */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaStar />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "10 años de experiencia"
                            : idioma === "en"
                            ? "10 years of experience"
                            : "10 anos de experiência"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Más de una década realizando traslados privados, ejecutivos y turísticos."
                            : idioma === "en"
                            ? "More than a decade providing private, executive and tourist transfers."
                            : "Mais de uma década realizando traslados privados, executivos e turísticos."}
                    </p>

                </div>


                {/* ATENCIÓN PERSONALIZADA */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaUserCheck />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Atención personalizada"
                            : idioma === "en"
                            ? "Personalized service"
                            : "Atendimento personalizado"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Cada viaje se adapta a las necesidades de cada pasajero para brindar una experiencia única."
                            : idioma === "en"
                            ? "Every trip is tailored to each passenger's needs to provide a unique experience."
                            : "Cada viagem é adaptada às necessidades de cada passageiro para proporcionar uma experiência única."}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default PorqueElegirme;
