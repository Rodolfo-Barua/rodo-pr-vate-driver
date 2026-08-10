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
                    : idioma === "en"
                    ? "Recommended Restaurants"
                    : "Restaurantes Recomendados"}
            </h2>


            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Disfrutá algunas de las mejores propuestas gastronómicas de Buenos Aires."
                    : idioma === "en"
                    ? "Enjoy some of the best dining experiences Buenos Aires has to offer."
                    : "Desfrute de algumas das melhores experiências gastronômicas de Buenos Aires."}
            </p>


            <div className={estilos.contenedor}>

                {restaurantes.map((restaurante) => (

                    <div
                        className={estilos.tarjeta}
                        key={restaurante.id}
                    >

                        <div className={estilos.info}>

                            <span className={estilos.categoria}>

                                {idioma === "es"
                                    ? restaurante.categoria
                                    : idioma === "en"
                                    ? restaurante.categoria === "Parrilla"
                                        ? "Steakhouse"
                                        : restaurante.categoria === "Parrilla Premium"
                                        ? "Premium Steakhouse"
                                        : restaurante.categoria === "Cocina Argentina"
                                        ? "Argentine Cuisine"
                                        : restaurante.categoria === "Cocina Italiana"
                                        ? "Italian Cuisine"
                                        : restaurante.categoria === "Alta Cocina"
                                        ? "Fine Dining"
                                        : restaurante.categoria
                                    : restaurante.categoria === "Parrilla"
                                    ? "Parrilla"
                                    : restaurante.categoria === "Parrilla Premium"
                                    ? "Parrilla Premium"
                                    : restaurante.categoria === "Cocina Argentina"
                                    ? "Culinária Argentina"
                                    : restaurante.categoria === "Cocina Italiana"
                                    ? "Culinária Italiana"
                                    : restaurante.categoria === "Alta Cocina"
                                    ? "Alta Gastronomia"
                                    : restaurante.categoria}

                            </span>


                            <h3>{restaurante.nombre}</h3>


                            <p>
                                {idioma === "es"
                                    ? restaurante.descripcion
                                    : idioma === "en"
                                    ? restaurante.descripcionEn
                                    : restaurante.descripcionPt}
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
                                        : idioma === "en"
                                        ? "View location"
                                        : "Ver localização"}
                                </a>


                                <a
                                    href={`https://wa.me/5491124627189?text=${encodeURIComponent(
                                        idioma === "es"
                                            ? `Hola Rodo, quisiera consultar un traslado al restaurante ${restaurante.nombre}.`
                                            : idioma === "en"
                                            ? `Hello Rodo, I would like to inquire about a transfer to ${restaurante.nombre}.`
                                            : `Olá Rodo, gostaria de consultar um traslado para o restaurante ${restaurante.nombre}.`
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

export default Restaurantes;