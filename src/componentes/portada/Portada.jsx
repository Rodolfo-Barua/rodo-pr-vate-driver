import estilos from "./Portada.module.css";
import fondo from "../../assets/imagenes/portada.jpg";

function Portada() {
return (
    <section
    id="inicio"
    className={estilos.portada}
    style={{ backgroundImage: `url(${fondo})` }}
    >
    <div className={estilos.overlay}></div>

    <div className={estilos.contenido}>

        <div className={estilos.texto}>

        <span className={estilos.subtitulo}>
            PRIVATE DRIVER
        </span>

        <h1>
            Descubrí
            <br />
            Buenos Aires
        </h1>

        <p>
            Traslados privados, ejecutivos y recorridos personalizados
            para conocer Buenos Aires con comodidad, seguridad y puntualidad.
        </p>

        </div>

    </div>

    </section>
);
}

export default Portada;