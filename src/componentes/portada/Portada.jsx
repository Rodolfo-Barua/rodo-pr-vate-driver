import estilos from "./Portada.module.css";
import fondo from "../../assets/imagenes/portada.jpg";
import { useIdioma } from "../../contexto/IdiomaContext";

function Portada() {
    const { idioma } = useIdioma();

    return (
        <section
            id="inicio"
            className={estilos.portada}
            style={{ backgroundImage: `url(${fondo})` }}
        >

            <div className={estilos.contenido}>

                <div className={estilos.texto}>

                    <span className={estilos.subtitulo}>
                    </span>

                    <h1>
                        {idioma === "es" ? (
                            <>
                                Descubrí
                                <br />
                                Buenos Aires
                            </>
                        ) : idioma === "en" ? (
                            <>
                                Discover
                                <br />
                                Buenos Aires
                            </>
                        ) : (
                            <>
                                Descubra
                                <br />
                                Buenos Aires
                            </>
                        )}
                    </h1>

                    <p>
                        {idioma === "es"
                            ? "Traslados privados, ejecutivos y recorridos personalizados para conocer Buenos Aires con comodidad, seguridad y puntualidad."
                            : idioma === "en"
                            ? "Private transfers, executive services and personalized tours to discover Buenos Aires with comfort, safety and punctuality."
                            : "Traslados privados, serviços executivos e passeios personalizados para conhecer Buenos Aires com conforto, segurança e pontualidade."}
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Portada;