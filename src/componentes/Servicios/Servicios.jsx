import estilos from "./Servicios.module.css";

import {
FaPlaneDeparture,
FaCarSide,
FaLandmark,
} from "react-icons/fa";

function Servicios() {
return (
    <section id="servicios" className={estilos.servicios}>

    <h2>Nuestros Servicios</h2>

    <p className={estilos.subtitulo}>
        Brindamos un servicio de traslado privado, ejecutivo y turístico,
        priorizando la puntualidad, el confort y la seguridad.
    </p>

    <div className={estilos.contenedor}>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaPlaneDeparture />
        </div>

        <h3>Traslados a Aeropuertos</h3>

        <p>
            Traslados desde y hacia Aeroparque Jorge Newbery y
            el Aeropuerto Internacional de Ezeiza.
        </p>

        </div>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaLandmark />
        </div>

        <h3>Recorridos Turísticos</h3>

        <p>
            Descubrí los principales atractivos de Buenos Aires
            con un servicio privado y personalizado.
        </p>

        </div>

        <div className={estilos.tarjeta}>

        <div className={estilos.icono}>
            <FaCarSide />
        </div>

        <h3>Traslados Privados</h3>

        <p>
            Viajes ejecutivos, reuniones, hoteles, eventos
            especiales y traslados dentro de la ciudad.
        </p>

        </div>

    </div>

    </section>
);
}

export default Servicios;