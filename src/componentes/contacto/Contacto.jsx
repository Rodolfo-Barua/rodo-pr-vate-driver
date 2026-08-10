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
        sillaBebe: "no",
        espera: "no",
        tiempoEspera: "",
        paradas: [],
        mensaje: "",
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value,
        });
    };

    const cambiarParada = (index, value) => {
        const nuevasParadas = [...formulario.paradas];

        nuevasParadas[index] = value;

        setFormulario({
            ...formulario,
            paradas: nuevasParadas,
        });
    };

    const agregarParada = () => {
        setFormulario({
            ...formulario,
            paradas: [...formulario.paradas, ""],
        });
    };

    const eliminarParada = (index) => {
        const nuevasParadas = formulario.paradas.filter(
            (_, i) => i !== index
        );

        setFormulario({
            ...formulario,
            paradas: nuevasParadas,
        });
    };

    const enviarWhatsApp = (e) => {
        e.preventDefault();

        const textoParadas =
            formulario.paradas.length > 0
                ? formulario.paradas
                      .map(
                          (parada, index) =>
                              `${index + 1}. ${
                                  parada ||
                                  (idioma === "es"
                                      ? "No especificada"
                                      : idioma === "en"
                                      ? "Not specified"
                                      : "Não especificada")
                              }`
                      )
                      .join("\n")
                : idioma === "es"
                ? "Sin paradas adicionales."
                : idioma === "en"
                ? "No additional stops."
                : "Sem paradas adicionais.";

        const texto =
            idioma === "es"
                ? `Hola Rodo, quisiera solicitar un presupuesto de traslado.

📍 Inicio: ${formulario.inicio}
📍 Destino: ${formulario.destino}
👥 Pasajeros: ${formulario.pasajeros}
🧳 Equipaje: ${formulario.equipaje || "No especificado"}
📅 Fecha: ${formulario.fecha}
🕐 Hora: ${formulario.hora}

👶 Silla para bebé: ${
                      formulario.sillaBebe === "si" ? "Sí" : "No"
                  }

⏱️ Viaje con espera: ${
                      formulario.espera === "si" ? "Sí" : "No"
                  }${
                      formulario.espera === "si"
                          ? `\n⏱️ Tiempo de espera solicitado: ${formulario.tiempoEspera} minutos`
                          : ""
                  }

📍 Paradas adicionales:
${textoParadas}

💬 Mensaje:
${formulario.mensaje || "Sin mensaje adicional."}`
                : idioma === "en"
                ? `Hello Rodo, I would like to request a transfer quote.

📍 Pickup: ${formulario.inicio}
📍 Destination: ${formulario.destino}
👥 Passengers: ${formulario.pasajeros}
🧳 Luggage: ${formulario.equipaje || "Not specified"}
📅 Date: ${formulario.fecha}
🕐 Time: ${formulario.hora}

👶 Baby seat: ${
                      formulario.sillaBebe === "si" ? "Yes" : "No"
                  }

⏱️ Waiting service: ${
                      formulario.espera === "si" ? "Yes" : "No"
                  }${
                      formulario.espera === "si"
                          ? `\n⏱️ Requested waiting time: ${formulario.tiempoEspera} minutes`
                          : ""
                  }

📍 Additional stops:
${textoParadas}

💬 Message:
${formulario.mensaje || "No additional message."}`
                : `Olá Rodo, gostaria de solicitar um orçamento de traslado.

📍 Local de partida: ${formulario.inicio}
📍 Destino: ${formulario.destino}
👥 Passageiros: ${formulario.pasajeros}
🧳 Bagagem: ${formulario.equipaje || "Não especificada"}
📅 Data: ${formulario.fecha}
🕐 Horário: ${formulario.hora}

👶 Cadeira para bebê: ${
                      formulario.sillaBebe === "si" ? "Sim" : "Não"
                  }

⏱️ Serviço com espera: ${
                      formulario.espera === "si" ? "Sim" : "Não"
                  }${
                      formulario.espera === "si"
                          ? `\n⏱️ Tempo de espera solicitado: ${formulario.tiempoEspera} minutos`
                          : ""
                  }

📍 Paradas adicionais:
${textoParadas}

💬 Mensagem:
${formulario.mensaje || "Sem mensagem adicional."}`;

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
                    : idioma === "en"
                    ? "Request Your Quote"
                    : "Solicite seu orçamento"}
            </h2>

            <p className={estilos.subtitulo}>
                {idioma === "es"
                    ? "Completá los datos de tu traslado y enviá la solicitud directamente por WhatsApp."
                    : idioma === "en"
                    ? "Fill in your transfer details and send your request directly via WhatsApp."
                    : "Preencha os dados do seu traslado e envie sua solicitação diretamente pelo WhatsApp."}
            </p>


            <form
                className={estilos.formulario}
                onSubmit={enviarWhatsApp}
            >

                {/* INICIO */}

                <div className={estilos.grupo}>

                    <label htmlFor="inicio">
                        {idioma === "es"
                            ? "Lugar de inicio"
                            : idioma === "en"
                            ? "Pickup location"
                            : "Local de partida"}
                    </label>

                    <input
                        id="inicio"
                        name="inicio"
                        type="text"
                        placeholder={
                            idioma === "es"
                                ? "Ej: Aeroparque"
                                : idioma === "en"
                                ? "e.g. Jorge Newbery Airport"
                                : "Ex: Aeroparque"
                        }
                        value={formulario.inicio}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                {/* DESTINO */}

                <div className={estilos.grupo}>

                    <label htmlFor="destino">
                        {idioma === "es"
                            ? "Destino"
                            : idioma === "en"
                            ? "Destination"
                            : "Destino"}
                    </label>

                    <input
                        id="destino"
                        name="destino"
                        type="text"
                        placeholder={
                            idioma === "es"
                                ? "Ej: Hotel en Palermo"
                                : idioma === "en"
                                ? "e.g. Hotel in Palermo"
                                : "Ex: Hotel em Palermo"
                        }
                        value={formulario.destino}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                {/* PASAJEROS Y EQUIPAJE */}

                <div className={estilos.fila}>

                    <div className={estilos.grupo}>

                        <label htmlFor="pasajeros">
                            {idioma === "es"
                                ? "Cantidad de pasajeros"
                                : idioma === "en"
                                ? "Number of passengers"
                                : "Quantidade de passageiros"}
                        </label>

                        <input
                            id="pasajeros"
                            name="pasajeros"
                            type="number"
                            min="1"
                            placeholder={
                                idioma === "pt"
                                    ? "Ex: 2"
                                    : "Ej: 2"
                            }
                            value={formulario.pasajeros}
                            onChange={manejarCambio}
                            required
                        />

                    </div>


                    <div className={estilos.grupo}>

                        <label htmlFor="equipaje">
                            {idioma === "es"
                                ? "Equipaje"
                                : idioma === "en"
                                ? "Luggage"
                                : "Bagagem"}
                        </label>

                        <input
                            id="equipaje"
                            name="equipaje"
                            type="text"
                            placeholder={
                                idioma === "es"
                                    ? "Ej: 2 valijas"
                                    : idioma === "en"
                                    ? "e.g. 2 suitcases"
                                    : "Ex: 2 malas"
                            }
                            value={formulario.equipaje}
                            onChange={manejarCambio}
                        />

                    </div>

                </div>


                {/* FECHA Y HORA */}

                <div className={estilos.fila}>

                    <div className={estilos.grupo}>

                        <label htmlFor="fecha">
                            {idioma === "es"
                                ? "Fecha"
                                : idioma === "en"
                                ? "Date"
                                : "Data"}
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
                                : idioma === "en"
                                ? "Time"
                                : "Horário"}
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


                {/* SILLA PARA BEBÉ */}

                <div className={estilos.grupo}>

                    <label htmlFor="sillaBebe">
                        {idioma === "es"
                            ? "👶 Silla para bebé"
                            : idioma === "en"
                            ? "👶 Baby seat"
                            : "👶 Cadeira para bebê"}
                    </label>

                    <select
                        id="sillaBebe"
                        name="sillaBebe"
                        value={formulario.sillaBebe}
                        onChange={manejarCambio}
                    >

                        <option value="no">
                            {idioma === "es"
                                ? "No necesito"
                                : idioma === "en"
                                ? "I don't need one"
                                : "Não preciso"}
                        </option>

                        <option value="si">
                            {idioma === "es"
                                ? "Sí, necesito silla para bebé"
                                : idioma === "en"
                                ? "Yes, I need a baby seat"
                                : "Sim, preciso de uma cadeira para bebê"}
                        </option>

                    </select>

                    <small>
                        {idioma === "es"
                            ? "Sujeto a disponibilidad. Solicitar con anticipación."
                            : idioma === "en"
                            ? "Subject to availability. Please request in advance."
                            : "Sujeito à disponibilidade. Solicite com antecedência."}
                    </small>

                </div>


                {/* VIAJE CON ESPERA */}

                <div className={estilos.grupo}>

                    <label htmlFor="espera">
                        {idioma === "es"
                            ? "⏱️ Viaje con espera"
                            : idioma === "en"
                            ? "⏱️ Waiting service"
                            : "⏱️ Serviço com espera"}
                    </label>

                    <select
                        id="espera"
                        name="espera"
                        value={formulario.espera}
                        onChange={manejarCambio}
                    >

                        <option value="no">
                            {idioma === "es"
                                ? "No"
                                : idioma === "en"
                                ? "No"
                                : "Não"}
                        </option>

                        <option value="si">
                            {idioma === "es"
                                ? "Sí, necesito que el conductor espere"
                                : idioma === "en"
                                ? "Yes, I need the driver to wait"
                                : "Sim, preciso que o motorista aguarde"}
                        </option>

                    </select>

                </div>


                {/* TIEMPO DE ESPERA */}

                {formulario.espera === "si" && (

                    <div className={estilos.grupo}>

                        <label htmlFor="tiempoEspera">
                            {idioma === "es"
                                ? "Tiempo estimado de espera"
                                : idioma === "en"
                                ? "Estimated waiting time"
                                : "Tempo estimado de espera"}
                        </label>

                        <input
                            id="tiempoEspera"
                            name="tiempoEspera"
                            type="number"
                            min="1"
                            placeholder={
                                idioma === "es"
                                    ? "Ej: 30 minutos"
                                    : idioma === "en"
                                    ? "e.g. 30 minutes"
                                    : "Ex: 30 minutos"
                            }
                            value={formulario.tiempoEspera}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                )}


                {/* PARADAS */}

                <div className={estilos.grupo}>

                    <label>
                        {idioma === "es"
                            ? "📍 Paradas adicionales"
                            : idioma === "en"
                            ? "📍 Additional stops"
                            : "📍 Paradas adicionais"}
                    </label>


                    {formulario.paradas.length === 0 && (

                        <p>
                            {idioma === "es"
                                ? "No se agregaron paradas."
                                : idioma === "en"
                                ? "No additional stops added."
                                : "Nenhuma parada adicionada."}
                        </p>

                    )}


                    {formulario.paradas.map((parada, index) => (

                        <div
                            className={estilos.parada}
                            key={index}
                        >

                            <input
                                type="text"
                                placeholder={
                                    idioma === "es"
                                        ? `Parada ${index + 1}`
                                        : idioma === "en"
                                        ? `Stop ${index + 1}`
                                        : `Parada ${index + 1}`
                                }
                                value={parada}
                                onChange={(e) =>
                                    cambiarParada(
                                        index,
                                        e.target.value
                                    )
                                }
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    eliminarParada(index)
                                }
                            >
                                ✕
                            </button>

                        </div>

                    ))}


                    <button
                        type="button"
                        className={estilos.botonParada}
                        onClick={agregarParada}
                    >
                        {idioma === "es"
                            ? "+ Agregar parada"
                            : idioma === "en"
                            ? "+ Add stop"
                            : "+ Adicionar parada"}
                    </button>

                </div>


                {/* MENSAJE */}

                <div className={estilos.grupo}>

                    <label htmlFor="mensaje">
                        {idioma === "es"
                            ? "Mensaje adicional"
                            : idioma === "en"
                            ? "Additional message"
                            : "Mensagem adicional"}
                    </label>

                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        placeholder={
                            idioma === "es"
                                ? "¿Necesitás alguna indicación especial?"
                                : idioma === "en"
                                ? "Do you need any special arrangements?"
                                : "Você precisa de alguma indicação especial?"
                        }
                        value={formulario.mensaje}
                        onChange={manejarCambio}
                    />

                </div>


                {/* BOTÓN */}

                <button
                    type="submit"
                    className={estilos.boton}
                >
                    {idioma === "es"
                        ? "Solicitar presupuesto por WhatsApp"
                        : idioma === "en"
                        ? "Request a quote via WhatsApp"
                        : "Solicitar orçamento pelo WhatsApp"}
                </button>

            </form>

        </section>
    );
}

export default Contacto;