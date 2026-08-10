import estilos from "./Servicios.module.css";

import {
    FaPlaneDeparture,
    FaCarSide,
    FaLandmark,
} from "react-icons/fa";

import { useIdioma } from "../../contexto/IdiomaContext";

function Servicios() {
    const { idioma } = useIdioma();

    return (
        <section id="servicios" className={estilos.servicios}>

            <h2>
                {idioma === "es"
                    ? "Nuestros Servicios"
                    : "Our Services"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Brindamos un servicio de traslado privado, ejecutivo y turístico, priorizando la puntualidad, el confort y la seguridad."
                    : "We provide private, executive and tourist transfer services, prioritizing punctuality, comfort and safety."}
            </p>

            <div className={estilos.contenedor}>

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaPlaneDeparture />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Traslados a Aeropuertos"
                            : "Airport Transfers"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Traslados desde y hacia Aeroparque Jorge Newbery y el Aeropuerto Internacional de Ezeiza."
                            : "Transfers to and from Jorge Newbery Airport and Ezeiza International Airport."}
                    </p>

                </div>


                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaLandmark />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Recorridos Turísticos"
                            : "Sightseeing Tours"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Descubrí los principales atractivos de Buenos Aires con un servicio privado y personalizado."
                            : "Discover the main attractions of Buenos Aires with a private and personalized service."}
                    </p>

                </div>


                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaCarSide />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Traslados Privados"
                            : "Private Transfers"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Viajes ejecutivos, reuniones, hoteles, eventos especiales y traslados dentro de la ciudad."
                            : "Executive trips, meetings, hotels, special events and transfers throughout the city."}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Servicios;