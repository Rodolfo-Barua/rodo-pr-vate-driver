import { useState } from "react";
import estilos from "./Resenas.module.css";
import { useIdioma } from "../../contexto/IdiomaContext";

function Resenas() {
    const { idioma } = useIdioma();

    const [reseña, setReseña] = useState({
        nombre: "",
        pais: "",
        calificacion: "5",
        comentario: "",
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setReseña({
            ...reseña,
            [name]: value,
        });
    };

    const enviarReseña = (e) => {
        e.preventDefault();

        const estrellas = "⭐".repeat(Number(reseña.calificacion));

        const texto =
            idioma === "es"
                ? `Hola Rodo, quiero dejar una reseña sobre mi experiencia con Rodo Private Driver.

👤 Nombre: ${reseña.nombre}
🌎 País: ${reseña.pais || "No especificado"}
⭐ Calificación: ${estrellas}

💬 Reseña:
${reseña.comentario}`
                : `Hello Rodo, I would like to leave a review about my experience with Rodo Private Driver.

👤 Name: ${reseña.nombre}
🌎 Country: ${reseña.pais || "Not specified"}
⭐ Rating: ${estrellas}

💬 Review:
${reseña.comentario}`;

        const mensajeCodificado = encodeURIComponent(texto);

        window.open(
            `https://wa.me/5491124627189?text=${mensajeCodificado}`,
            "_blank"
        );
    };

    return (
        <section id="resenas" className={estilos.resenas}>

            <h2>
                {idioma === "es"
                    ? "Lo que dicen nuestros pasajeros"
                    : "What Our Passengers Say"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Muy pronto compartiremos las experiencias de quienes hayan confiado en Rodo Private Driver."
                    : "Soon we will share the experiences of those who have trusted Rodo Private Driver."}
            </p>

            <div className={estilos.contenedor}>

                <div className={estilos.tarjeta}>

                    <div className={estilos.estrellas}>
                        ★★★★★
                    </div>

                    <p>
                        {idioma === "es"
                            ? "Tu experiencia puede formar parte de esta sección."
                            : "Your experience can be part of this section."}
                    </p>

                    <span className={estilos.pais}>
                        {idioma === "es"
                            ? "Esperamos tu reseña"
                            : "We look forward to your review"}
                    </span>

                </div>

            </div>

            <div className={estilos.formularioResena}>

                <h3>
                    {idioma === "es"
                        ? "¿Viajaste con nosotros?"
                        : "Did you travel with us?"}
                </h3>

                <p>
                    {idioma === "es"
                        ? "Nos gustaría conocer tu experiencia."
                        : "We would love to hear about your experience."}
                </p>

                <form onSubmit={enviarReseña}>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="nombre">
                            {idioma === "es" ? "Nombre" : "Name"}
                        </label>

                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder={
                                idioma === "es"
                                    ? "Tu nombre"
                                    : "Your name"
                            }
                            value={reseña.nombre}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="pais">
                            {idioma === "es" ? "País" : "Country"}
                        </label>

                        <input
                            id="pais"
                            name="pais"
                            type="text"
                            placeholder={
                                idioma === "es"
                                    ? "Ej: Argentina"
                                    : "e.g. Argentina"
                            }
                            value={reseña.pais}
                            onChange={manejarCambio}
                        />

                    </div>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="calificacion">
                            {idioma === "es"
                                ? "Calificación"
                                : "Rating"}
                        </label>

                        <select
                            id="calificacion"
                            name="calificacion"
                            value={reseña.calificacion}
                            onChange={manejarCambio}
                        >
                            <option value="5">
                                ★★★★★ - {idioma === "es" ? "Excelente" : "Excellent"}
                            </option>

                            <option value="4">
                                ★★★★☆ - {idioma === "es" ? "Muy bueno" : "Very good"}
                            </option>

                            <option value="3">
                                ★★★☆☆ - {idioma === "es" ? "Bueno" : "Good"}
                            </option>

                            <option value="2">
                                ★★☆☆☆ - {idioma === "es" ? "Regular" : "Fair"}
                            </option>

                            <option value="1">
                                ★☆☆☆☆ - {idioma === "es" ? "Malo" : "Poor"}
                            </option>
                        </select>

                    </div>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="comentario">
                            {idioma === "es"
                                ? "Tu experiencia"
                                : "Your experience"}
                        </label>

                        <textarea
                            id="comentario"
                            name="comentario"
                            rows="5"
                            placeholder={
                                idioma === "es"
                                    ? "Contanos cómo fue tu experiencia..."
                                    : "Tell us about your experience..."
                            }
                            value={reseña.comentario}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className={estilos.botonResena}
                    >
                        ⭐{" "}
                        {idioma === "es"
                            ? "Enviar mi reseña por WhatsApp"
                            : "Send my review via WhatsApp"}
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Resenas;