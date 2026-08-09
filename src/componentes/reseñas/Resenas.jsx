import estilos from "./Resenas.module.css";

function Resenas() {
return (
    <section id="resenas" className={estilos.resenas}>

    <h2>Lo que dicen nuestros pasajeros</h2>

    <p className={estilos.subtitulo}>
        La experiencia de quienes confiaron en nuestro servicio.
    </p>

    <div className={estilos.contenedor}>

        <div className={estilos.tarjeta}>

        <div className={estilos.estrellas}>
            ★★★★★
        </div>

        <p>
            "Excelente servicio. Muy puntual, el vehículo impecable y el
            recorrido fue muy cómodo. Totalmente recomendable."
        </p>

        <h4>María G.</h4>

        <span className={estilos.pais}>
            🇪🇸 España
        </span>

        </div>


        <div className={estilos.tarjeta}>

        <div className={estilos.estrellas}>
            ★★★★★
        </div>

        <p>
            "Utilizamos el servicio para recorrer Buenos Aires y la experiencia
            fue excelente. Muy amable y profesional."
        </p>

        <h4>John S.</h4>

        <span className={estilos.pais}>
            🇺🇸 Estados Unidos
        </span>

        </div>


        <div className={estilos.tarjeta}>

        <div className={estilos.estrellas}>
            ★★★★★
        </div>

        <p>
            "Muy buena atención desde el primer contacto hasta el final del
            viaje. Sin dudas volveríamos a contratar el servicio."
        </p>

        <h4>Carlos R.</h4>

        <span className={estilos.pais}>
            🇦🇷 Argentina
        </span>

        </div>


        <div className={estilos.tarjeta}>

        <div className={estilos.estrellas}>
            ★★★★★
        </div>

        <p>
            "Un servicio muy profesional y puntual. Fue una excelente manera
            de conocer Buenos Aires con tranquilidad."
        </p>

        <h4>Sophie M.</h4>

        <span className={estilos.pais}>
            🇫🇷 Francia
        </span>

        </div>


        <div className={estilos.tarjeta}>

        <div className={estilos.estrellas}>
            ★★★★★
        </div>

        <p>
            "Excelente experiencia. Muy cómodo el traslado y una atención
            impecable durante todo el recorrido."
        </p>

        <h4>Luca B.</h4>

        <span className={estilos.pais}>
            🇮🇹 Italia
        </span>

        </div>


        <div className={estilos.tarjeta}>

        <div className={estilos.estrellas}>
            ★★★★★
        </div>

        <p>
            "Muy recomendable para quienes visitan Buenos Aires. Puntualidad,
            comodidad y excelente trato."
        </p>

        <h4>Anna P.</h4>

        <span className={estilos.pais}>
            🇩🇪 Alemania
        </span>

        </div>

    </div>

    </section>
);
}

export default Resenas;