import estilos from "./Restaurantes.module.css";
import restaurantes from "../../datos/restaurantes";

import { FaMapMarkerAlt, FaCarSide } from "react-icons/fa";

function Restaurantes() {
return (
    <section id="restaurantes" className={estilos.restaurantes}>

    <h2>Restaurantes Recomendados</h2>

    <p className={estilos.subtitulo}>
        Disfrutá algunas de las mejores propuestas gastronómicas de Buenos Aires.
    </p>

    <div className={estilos.contenedor}>

        {restaurantes.map((restaurante) => (

        <div className={estilos.tarjeta} key={restaurante.id}>

            <img
            src={restaurante.imagen}
            alt={restaurante.nombre}
            className={estilos.imagen}
            />

            <div className={estilos.info}>

            <span className={estilos.categoria}>
                {restaurante.categoria}
            </span>

            <h3>{restaurante.nombre}</h3>

            <p>{restaurante.descripcion}</p>

            <div className={estilos.botones}>

                <a
                href={restaurante.maps}
                target="_blank"
                rel="noreferrer"
                className={estilos.ubicacion}
                >
                <FaMapMarkerAlt />
                Ver ubicación
                </a>

                <a
                href={`https://wa.me/TUNUMERO?text=Hola%20Rodo,%20quisiera%20consultar%20un%20traslado%20a%20${encodeURIComponent(restaurante.nombre)}`}
                target="_blank"
                rel="noreferrer"
                className={estilos.consultar}
                >
                <FaCarSide />
                Consultar traslado
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