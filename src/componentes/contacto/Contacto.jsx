import { useState } from "react";
import estilos from "./Contacto.module.css";
import { useIdioma } from "../../contexto/IdiomaContext";

function Contacto() {
    const { idioma } = useIdioma();

    const [formulario, setFormulario] = useState({
        inicio: "",
        destino: "",
        pasajeros: "",
        equipaje: "",
        fecha: "",
        hora: "",
        mensaje: "",
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    const enviarWhatsApp = (e) => {
        e.preventDefault();

        const texto =
            idioma === "es"
                ? `Hola Rodo, quisiera solicitar un presupuesto de traslado.

📍 Inicio: ${formulario.inicio}
📍 Destino: ${formulario.destino}
👥 Pasajeros: ${formulario.pasajeros}
🧳 Equipaje: ${formulario.equipaje || "No especificado"}
📅 Fecha: ${formulario.fecha}
🕐 Hora: ${formulario.hora}

💬 Mensaje:
${formulario.mensaje || "Sin mensaje adicional."}`
                : `Hello Rodo, I would like to request a transfer quote.

📍 Pickup: ${formulario.inicio}
📍 Destination: ${formulario.destino}
👥 Passengers: ${formulario.pasajeros}
🧳 Luggage: ${formulario.equipaje || "Not specified"}
📅 Date: ${formulario.fecha}
🕐 Time: ${formulario.hora}

💬 Message:
${formulario.mensaje || "No additional message."}`;

        const mensajeCodificado = encodeURIComponent(texto);

        window.open(
            `https://wa.me/5491124627189?text=${mensajeCodificado}`,
            "_blank"
        );
    };

    return (
        <section id="contacto" className={estilos.contacto}>

            <h2>
                {idioma === "es"
                    ? "Solicitá tu presupuesto"
                    : "Request Your Quote"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Completá los datos de tu traslado y enviá la solicitud directamente por WhatsApp."
                    : "Fill in your transfer details and send your request directly via WhatsApp."}
            </p>

            <form
                className={estilos.formulario}
                onSubmit={enviarWhatsApp}
            >

                <div className={estilos.grupo}>

                    <label htmlFor="inicio">
                        {idioma === "es"
                            ? "Lugar de inicio"
                            : "Pickup location"}
                    </label>

                    <input
                        id="inicio"
                        name="inicio"
                        type="text"
                        placeholder={
                            idioma === "es"
                                ? "Ej: Aeroparque"
                                : "e.g. Jorge Newbery Airport"
                        }
                        value={formulario.inicio}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <div className={estilos.grupo}>

                    <label htmlFor="destino">
                        {idioma === "es"
                            ? "Destino"
                            : "Destination"}
                    </label>

                    <input
                        id="destino"
                        name="destino"
                        type="text"
                        placeholder={
                            idioma === "es"
                                ? "Ej: Hotel en Palermo"
                                : "e.g. Hotel in Palermo"
                        }
                        value={formulario.destino}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <div className={estilos.fila}>

                    <div className={estilos.grupo}>

                        <label htmlFor="pasajeros">
                            {idioma === "es"
                                ? "Cantidad de pasajeros"
                                : "Number of passengers"}
                        </label>

                        <input
                            id="pasajeros"
                            name="pasajeros"
                            type="number"
                            min="1"
                            placeholder="Ej: 2"
                            value={formulario.pasajeros}
                            onChange={manejarCambio}
                            required
                        />

                    </div>


                    <div className={estilos.grupo}>

                        <label htmlFor="equipaje">
                            {idioma === "es"
                                ? "Equipaje"
                                : "Luggage"}
                        </label>

                        <input
                            id="equipaje"
                            name="equipaje"
                            type="text"
                            placeholder={
                                idioma === "es"
                                    ? "Ej: 2 valijas"
                                    : "e.g. 2 suitcases"
                            }
                            value={formulario.equipaje}
                            onChange={manejarCambio}
                        />

                    </div>

                </div>


                <div className={estilos.fila}>

                    <div className={estilos.grupo}>

                        <label htmlFor="fecha">
                            {idioma === "es"
                                ? "Fecha"
                                : "Date"}
                        </label>

                        <input
                            id="fecha"
                            name="fecha"
                            type="date"
                            value={formulario.fecha}
                            onChange={manejarCambio}
                            required
                        />

                    </div>


                    <div className={estilos.grupo}>

                        <label htmlFor="hora">
                            {idioma === "es"
                                ? "Hora"
                                : "Time"}
                        </label>

                        <input
                            id="hora"
                            name="hora"
                            type="time"
                            value={formulario.hora}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                </div>


                <div className={estilos.grupo}>

                    <label htmlFor="mensaje">
                        {idioma === "es"
                            ? "Mensaje adicional"
                            : "Additional message"}
                    </label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        placeholder={
                            idioma === "es"
                                ? "¿Necesitás alguna indicación especial?"
                                : "Do you need any special arrangements?"
                        }
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                    />

                </div>


                <button
                    type="submit"
                    className={estilos.boton}
                >
                    {idioma === "es"
                        ? "Solicitar presupuesto por WhatsApp"
                        : "Request a quote via WhatsApp"}
                </button>

            </form>

        </section>
    );
}

export default Contacto;