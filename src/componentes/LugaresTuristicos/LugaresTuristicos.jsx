import estilos from "./LugaresTuristicos.module.css";
import lugares from "../../datos/lugares";

import { FaMapMarkerAlt, FaCarSide } from "react-icons/fa";

function LugaresTuristicos() {
return (
    <section id="turismo" className={estilos.lugares}>

    <h2>Monumentos y Sitios Icónicos</h2>

    <p className={estilos.subtitulo}>
        Descubrí algunos de los lugares más emblemáticos de Buenos Aires y
        consultá tu traslado de forma rápida y sencilla.
    </p>

    <div className={estilos.contenedor}>

        {lugares.map((lugar) => (

        <div className={estilos.tarjeta} key={lugar.id}>

            <img
            src={lugar.imagen}
            alt={lugar.nombre}
            className={estilos.imagen}
            />

            <div className={estilos.info}>

            <h3>{lugar.nombre}</h3>

            <p>{lugar.descripcion}</p>

            <div className={estilos.botones}>

                <a
                href={lugar.maps}
                target="_blank"
                rel="noreferrer"
                className={estilos.ubicacion}
                >
                <FaMapMarkerAlt />
                Ver ubicación
                </a>

                <a
                href={`https://wa.me/5491124627189?text=Hola%20Rodo,%20quisiera%20consultar%20un%20traslado%20a%20${encodeURIComponent(
                lugar.nombre
                )}`}
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

export default LugaresTuristicos;