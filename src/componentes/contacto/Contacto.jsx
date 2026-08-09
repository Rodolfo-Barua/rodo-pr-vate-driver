import { useState } from "react";
import estilos from "./Contacto.module.css";

function Contacto() {
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

    const texto = `
Hola Rodo, quisiera solicitar un presupuesto de traslado.

📍 Inicio: ${formulario.inicio}
📍 Destino: ${formulario.destino}
👥 Pasajeros: ${formulario.pasajeros}
🧳 Equipaje: ${formulario.equipaje || "No especificado"}
📅 Fecha: ${formulario.fecha}
🕐 Hora: ${formulario.hora}

💬 Mensaje:
${formulario.mensaje || "Sin mensaje adicional."}
    `;

    const mensajeCodificado = encodeURIComponent(texto);

    window.open(
    `https://wa.me/5491124627189?text=${mensajeCodificado}`,
    "_blank"
    );
};

return (
    <section
    id="contacto"
    className={estilos.contacto}
    >

    <h2>Solicitá tu presupuesto</h2>

    <p className={estilos.subtitulo}>
        Completá los datos de tu traslado y enviá la solicitud directamente
        por WhatsApp.
    </p>

    <form
        className={estilos.formulario}
        onSubmit={enviarWhatsApp}
    >

        <div className={estilos.grupo}>

        <label htmlFor="inicio">
            Lugar de inicio
        </label>

        <input
            id="inicio"
            name="inicio"
            type="text"
            placeholder="Ej: Aeroparque"
            value={formulario.inicio}
            onChange={manejarCambio}
            required
        />

        </div>


        <div className={estilos.grupo}>

        <label htmlFor="destino">
            Destino
        </label>

        <input
            id="destino"
            name="destino"
            type="text"
            placeholder="Ej: Hotel en Palermo"
            value={formulario.destino}
            onChange={manejarCambio}
            required
        />

        </div>


        <div className={estilos.fila}>

        <div className={estilos.grupo}>

            <label htmlFor="pasajeros">
                Cantidad de pasajeros
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
                Equipaje
            </label>

            <input
            id="equipaje"
            name="equipaje"
            type="text"
            placeholder="Ej: 2 valijas"
            value={formulario.equipaje}
            onChange={manejarCambio}
            />

        </div>

        </div>


        <div className={estilos.fila}>

        <div className={estilos.grupo}>

            <label htmlFor="fecha">
                Fecha
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
                Hora
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
            Mensaje adicional
        </label>

        <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            placeholder="¿Necesitás alguna indicación especial?"
            value={formulario.mensaje}
            onChange={manejarCambio}
        />

        </div>


        <button
        type="submit"
        className={estilos.boton}
        >
            Solicitar presupuesto por WhatsApp
        </button>

    </form>

    </section>
);
}

export default Contacto;