import estilos from "./Cafeterias.module.css";
import cafeterias from "../../datos/cafeterias";

import { FaMapMarkerAlt, FaCoffee } from "react-icons/fa";
import { useIdioma } from "../../contexto/IdiomaContext";

function Cafeterias() {
    const { idioma } = useIdioma();

    return (
        <section id="cafeterias" className={estilos.cafeterias}>

            <h2>
                {idioma === "es"
                    ? "Cafeterías Recomendadas"
                    : "Recommended Cafés"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Descubrí algunas de las cafeterías más tradicionales y de especialidad de Buenos Aires."
                    : "Discover some of the most traditional and specialty cafés in Buenos Aires."}
            </p>

            <div className={estilos.contenedor}>

                {cafeterias.map((cafeteria) => (

                    <div
                        className={estilos.tarjeta}
                        key={cafeteria.id}
                    >

                        <img
                            src={cafeteria.imagen}
                            alt={cafeteria.nombre}
                            className={estilos.imagen}
                        />

                        <div className={estilos.info}>

                            <span className={estilos.categoria}>
                                {idioma === "es"
                                    ? cafeteria.categoria
                                    : cafeteria.categoria === "Café Histórico"
                                        ? "Historic Café"
                                        : cafeteria.categoria === "Especialidad"
                                            ? "Specialty Coffee"
                                            : cafeteria.categoria === "Coffee House"
                                                ? "Coffee House"
                                                : cafeteria.categoria}
                            </span>

                            <h3>{cafeteria.nombre}</h3>

                            <p>
                                {idioma === "es"
                                    ? cafeteria.descripcion
                                    : cafeteria.descripcionEn}
                            </p>

                            <div className={estilos.botones}>

                                <a
                                    href={cafeteria.maps}
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
                                            ? `Hola Rodo, quisiera consultar un traslado a ${cafeteria.nombre}.`
                                            : `Hello Rodo, I would like to inquire about a transfer to ${cafeteria.nombre}.`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={estilos.consultar}
                                >
                                    <FaCoffee />

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

export default Cafeterias;