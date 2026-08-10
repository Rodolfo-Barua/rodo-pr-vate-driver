import estilos from "./LugaresTuristicos.module.css";
import lugares from "../../datos/lugares";

import { FaMapMarkerAlt, FaCarSide } from "react-icons/fa";
import { useIdioma } from "../../contexto/IdiomaContext";

function LugaresTuristicos() {
    const { idioma } = useIdioma();

    return (
        <section id="turismo" className={estilos.lugares}>

            <h2>
                {idioma === "es"
                    ? "Monumentos y Sitios Icónicos"
                    : "Iconic Landmarks and Places"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Descubrí algunos de los lugares más emblemáticos de Buenos Aires y consultá tu traslado de forma rápida y sencilla."
                    : "Discover some of the most iconic places in Buenos Aires and request your private transfer quickly and easily."}
            </p>

            <div className={estilos.contenedor}>

                {lugares.map((lugar) => (

                    <div
                        className={estilos.tarjeta}
                        key={lugar.id}
                    >

                        <img
                            src={lugar.imagen}
                            alt={lugar.nombre}
                            className={estilos.imagen}
                        />

                        <div className={estilos.info}>

                            <h3>{lugar.nombre}</h3>

                            <p>
                                {idioma === "es"
                                    ? lugar.descripcion
                                    : lugar.descripcionEn}
                            </p>

                            <div className={estilos.botones}>

                                <a
                                    href={lugar.maps}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={estilos.ubicacion}
                                >
                                    <FaMapMarkerAlt />

                                    {idioma === "es"
                                        ? "Ver ubicación"
                                        : "View location"}
                                </a>

                                <a
                                    href={`https://wa.me/5491124627189?text=${encodeURIComponent(
                                        idioma === "es"
                                            ? `Hola Rodo, quisiera consultar un traslado al ${lugar.nombre}.`
                                            : `Hello Rodo, I would like to inquire about a transfer to ${lugar.nombre}.`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={estilos.consultar}
                                >
                                    <FaCarSide />

                                    {idioma === "es"
                                        ? "Consultar traslado"
                                        : "Request a transfer"}
                                </a>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default LugaresTuristicos;