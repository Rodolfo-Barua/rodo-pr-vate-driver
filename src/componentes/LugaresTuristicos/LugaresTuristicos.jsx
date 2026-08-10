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
                    : idioma === "en"
                    ? "Iconic Landmarks and Places"
                    : "Monumentos e Lugares Icônicos"}
            </h2>


            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Descubrí algunos de los lugares más emblemáticos de Buenos Aires y consultá tu traslado de forma rápida y sencilla."
                    : idioma === "en"
                    ? "Discover some of the most iconic places in Buenos Aires and request your private transfer quickly and easily."
                    : "Conheça alguns dos lugares mais emblemáticos de Buenos Aires e solicite seu traslado de forma rápida e fácil."}
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
                                    : idioma === "en"
                                    ? lugar.descripcionEn
                                    : lugar.descripcionPt}
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
                                        : idioma === "en"
                                        ? "View location"
                                        : "Ver localização"}
                                </a>


                                <a
                                    href={`https://wa.me/5491124627189?text=${encodeURIComponent(
                                        idioma === "es"
                                            ? `Hola Rodo, quisiera consultar un traslado al ${lugar.nombre}.`
                                            : idioma === "en"
                                            ? `Hello Rodo, I would like to inquire about a transfer to ${lugar.nombre}.`
                                            : `Olá Rodo, gostaria de consultar um traslado para ${lugar.nombre}.`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={estilos.consultar}
                                >
                                    <FaCarSide />

                                    {idioma === "es"
                                        ? "Consultar traslado"
                                        : idioma === "en"
                                        ? "Request a transfer"
                                        : "Consultar traslado"}
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