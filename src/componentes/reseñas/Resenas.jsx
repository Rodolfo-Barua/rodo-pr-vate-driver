import { useState } from "react";
import estilos from "./Resenas.module.css";

function Resenas() {
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

        const texto = `Hola Rodo, quiero dejar una reseña sobre mi experiencia con Rodo Private Driver.

👤 Nombre: ${reseña.nombre}
🌎 País: ${reseña.pais || "No especificado"}
⭐ Calificación: ${estrellas}

💬 Reseña:
${reseña.comentario}`;

        const mensajeCodificado = encodeURIComponent(texto);

        window.open(
            `https://wa.me/5491124627189?text=${mensajeCodificado}`,
            "_blank"
        );
    };

    return (
        <section id="resenas" className={estilos.resenas}>

            <h2>Lo que dicen nuestros pasajeros</h2>

            <p className={estilos.subtitulo}>
                Muy pronto compartiremos las experiencias de quienes
                hayan confiado en Rodo Private Driver.
            </p>

            <div className={estilos.contenedor}>

                <div className={estilos.tarjeta}>

                    <div className={estilos.estrellas}>
                        ★★★★★
                    </div>

                    <p>
                        Tu experiencia puede formar parte de esta sección.
                    </p>

                    <span className={estilos.pais}>
                        Esperamos tu reseña
                    </span>

                </div>

            </div>

            <div className={estilos.formularioResena}>

                <h3>¿Viajaste con nosotros?</h3>

                <p>
                    Nos gustaría conocer tu experiencia.
                </p>

                <form onSubmit={enviarReseña}>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="nombre">
                            Nombre
                        </label>

                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder="Tu nombre"
                            value={reseña.nombre}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="pais">
                            País
                        </label>

                        <input
                            id="pais"
                            name="pais"
                            type="text"
                            placeholder="Ej: Argentina"
                            value={reseña.pais}
                            onChange={manejarCambio}
                        />

                    </div>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="calificacion">
                            Calificación
                        </label>

                        <select
                            id="calificacion"
                            name="calificacion"
                            value={reseña.calificacion}
                            onChange={manejarCambio}
                        >
                            <option value="5">
                                ★★★★★ - Excelente
                            </option>

                            <option value="4">
                                ★★★★☆ - Muy bueno
                            </option>

                            <option value="3">
                                ★★★☆☆ - Bueno
                            </option>

                            <option value="2">
                                ★★☆☆☆ - Regular
                            </option>

                            <option value="1">
                                ★☆☆☆☆ - Malo
                            </option>
                        </select>

                    </div>

                    <div className={estilos.grupoResena}>

                        <label htmlFor="comentario">
                            Tu experiencia
                        </label>

                        <textarea
                            id="comentario"
                            name="comentario"
                            rows="5"
                            placeholder="Contanos cómo fue tu experiencia..."
                            value={reseña.comentario}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className={estilos.botonResena}
                    >
                        ⭐ Enviar mi reseña por WhatsApp
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Resenas;