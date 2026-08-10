import estilos from "./Cafeterias.module.css";
import cafeterias from "../../datos/cafeterias";

import { FaMapMarkerAlt, FaCoffee } from "react-icons/fa";

function Cafeterias() {
return (
    <section id="cafeterias" className={estilos.cafeterias}>

    <h2>Cafeterías Recomendadas</h2>

    <p className={estilos.subtitulo}>
        Descubrí algunas de las cafeterías más tradicionales y de especialidad
        de Buenos Aires.
    </p>

    <div className={estilos.contenedor}>

        {cafeterias.map((cafeteria) => (

        <div className={estilos.tarjeta} key={cafeteria.id}>

            <img
            src={cafeteria.imagen}
            alt={cafeteria.nombre}
            className={estilos.imagen}
            />

            <div className={estilos.info}>

            <span className={estilos.categoria}>
                {cafeteria.categoria}
            </span>

            <h3>{cafeteria.nombre}</h3>

            <p>{cafeteria.descripcion}</p>

            <div className={estilos.botones}>

                <a
                href={cafeteria.maps}
                target="_blank"
                rel="noreferrer"
                className={estilos.ubicacion}
                >
                <FaMapMarkerAlt />
                Ver ubicación
                </a>

                <a
                href={`https://wa.me/5491124627189?text=Hola%20Rodo,%20quisiera%20consultar%20un%20traslado%20a%20${encodeURIComponent(cafeteria.nombre)}`}
                target="_blank"
                rel="noreferrer"
                className={estilos.consultar}
                >
                <FaCoffee />
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

export default Cafeterias;