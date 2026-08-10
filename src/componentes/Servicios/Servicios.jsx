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
                    : idioma === "en"
                    ? "Our Services"
                    : "Nossos Serviços"}
            </h2>


            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Brindamos un servicio de traslado privado, ejecutivo y turístico, priorizando la puntualidad, el confort y la seguridad."
                    : idioma === "en"
                    ? "We provide private, executive and tourist transfer services, prioritizing punctuality, comfort and safety."
                    : "Oferecemos serviços de transporte privado, executivo e turístico, priorizando pontualidade, conforto e segurança."}
            </p>


            <div className={estilos.contenedor}>

                {/* AEROPUERTOS */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaPlaneDeparture />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Traslados a Aeropuertos"
                            : idioma === "en"
                            ? "Airport Transfers"
                            : "Traslados para Aeroportos"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Traslados desde y hacia Aeroparque Jorge Newbery y el Aeropuerto Internacional de Ezeiza."
                            : idioma === "en"
                            ? "Transfers to and from Jorge Newbery Airport and Ezeiza International Airport."
                            : "Traslados de ida e volta para o Aeroparque Jorge Newbery e o Aeroporto Internacional de Ezeiza."}
                    </p>

                </div>


                {/* TURISMO */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaLandmark />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Recorridos Turísticos"
                            : idioma === "en"
                            ? "Sightseeing Tours"
                            : "Passeios Turísticos"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Descubrí los principales atractivos de Buenos Aires con un servicio privado y personalizado."
                            : idioma === "en"
                            ? "Discover the main attractions of Buenos Aires with a private and personalized service."
                            : "Conheça os principais pontos turísticos de Buenos Aires com um serviço privado e personalizado."}
                    </p>

                </div>


                {/* TRASLADOS PRIVADOS */}

                <div className={estilos.tarjeta}>

                    <div className={estilos.icono}>
                        <FaCarSide />
                    </div>

                    <h3>
                        {idioma === "es"
                            ? "Traslados Privados"
                            : idioma === "en"
                            ? "Private Transfers"
                            : "Traslados Privados"}
                    </h3>

                    <p>
                        {idioma === "es"
                            ? "Viajes ejecutivos, reuniones, hoteles, eventos especiales y traslados dentro de la ciudad."
                            : idioma === "en"
                            ? "Executive trips, meetings, hotels, special events and transfers throughout the city."
                            : "Viagens executivas, reuniões, hotéis, eventos especiais e traslados pela cidade."}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Servicios;