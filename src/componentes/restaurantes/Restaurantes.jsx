import estilos from "./Restaurantes.module.css";
import restaurantes from "../../datos/restaurantes";

import { FaMapMarkerAlt, FaCarSide } from "react-icons/fa";
import { useIdioma } from "../../contexto/IdiomaContext";

function Restaurantes() {
    const { idioma } = useIdioma();

    return (
        <section id="restaurantes" className={estilos.restaurantes}>

            <h2>
                {idioma === "es"
                    ? "Restaurantes Recomendados"
                    : "Recommended Restaurants"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Disfrutá algunas de las mejores propuestas gastronómicas de Buenos Aires."
                    : "Enjoy some of the best dining experiences Buenos Aires has to offer."}
            </p>

            <div className={estilos.contenedor}>

                {restaurantes.map((restaurante) => (

                    <div
                        className={estilos.tarjeta}
                        key={restaurante.id}
                    >

                        <img
                            src={restaurante.imagen}
                            alt={restaurante.nombre}
                            className={estilos.imagen}
                        />

                        <div className={estilos.info}>

                            <span className={estilos.categoria}>
                                {idioma === "es"
                                    ? restaurante.categoria
                                    : restaurante.categoria === "Parrilla"
                                        ? "Steakhouse"
                                        : restaurante.categoria === "Parrilla Premium"
                                            ? "Premium Steakhouse"
                                            : restaurante.categoria === "Cocina Argentina"
                                                ? "Argentine Cuisine"
                                                : restaurante.categoria === "Cocina Italiana"
                                                    ? "Italian Cuisine"
                                                    : restaurante.categoria === "Alta Cocina"
                                                        ? "Fine Dining"
                                                        : restaurante.categoria}
                            </span>

                            <h3>{restaurante.nombre}</h3>

                            <p>
                                {idioma === "es"
                                    ? restaurante.descripcion
                                    : restaurante.descripcionEn}
                            </p>

                            <div className={estilos.botones}>

                                <a
                                    href={restaurante.maps}
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
                                            ? `Hola Rodo, quisiera consultar un traslado al restaurante ${restaurante.nombre}.`
                                            : `Hello Rodo, I would like to inquire about a transfer to ${restaurante.nombre}.`
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

export default Restaurantes;