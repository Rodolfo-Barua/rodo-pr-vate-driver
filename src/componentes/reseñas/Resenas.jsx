import estilos from "./Resenas.module.css";
import { FaGoogle } from "react-icons/fa";
import { useIdioma } from "../../contexto/IdiomaContext";

function Resenas() {
    const { idioma } = useIdioma();

    const enlaceGoogle =
        "https://g.page/r/CeQvh_hHwCQnEAE/review";

    return (
        <section id="resenas" className={estilos.resenas}>

            <h2>
                {idioma === "es"
                    ? "Lo que dicen nuestros pasajeros"
                    : idioma === "en"
                    ? "What Our Passengers Say"
                    : "O que dizem nossos passageiros"}
            </h2>


            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Tu opinión es muy importante para nosotros. Si viajaste con Rodo Private Driver, nos encantaría conocer tu experiencia."
                    : idioma === "en"
                    ? "Your opinion is very important to us. If you traveled with Rodo Private Driver, we would love to hear about your experience."
                    : "Sua opinião é muito importante para nós. Se você viajou com a Rodo Private Driver, gostaríamos muito de conhecer sua experiência."}
            </p>


            <div className={estilos.contenedor}>

                <div className={estilos.tarjeta}>

                    <div className={estilos.estrellas}>
                        ★★★★★
                    </div>


                    <h3>
                        {idioma === "es"
                            ? "¿Viajaste con nosotros?"
                            : idioma === "en"
                            ? "Did you travel with us?"
                            : "Você viajou conosco?"}
                    </h3>


                    <p>
                        {idioma === "es"
                            ? "Dejanos tu opinión directamente en Google y ayudá a otros pasajeros a conocer nuestro servicio."
                            : idioma === "en"
                            ? "Leave your review directly on Google and help other passengers discover our service."
                            : "Deixe sua avaliação diretamente no Google e ajude outros passageiros a conhecer nosso serviço."}
                    </p>


                    <a
                        href={enlaceGoogle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={estilos.botonGoogle}
                    >
                        <FaGoogle />

                        {idioma === "es"
                            ? "Dejar una reseña en Google"
                            : idioma === "en"
                            ? "Leave a Google review"
                            : "Deixar uma avaliação no Google"}
                    </a>

                </div>

            </div>


            <div className={estilos.mensajeResena}>

                <p>
                    {idioma === "es"
                        ? "⭐ Gracias por confiar en Rodo Private Driver."
                        : idioma === "en"
                        ? "⭐ Thank you for choosing Rodo Private Driver."
                        : "⭐ Obrigado por escolher a Rodo Private Driver."}
                </p>

            </div>

        </section>
    );
}

export default Resenas;