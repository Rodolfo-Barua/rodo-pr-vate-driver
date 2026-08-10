import { useState } from "react";
import estilos from "./Encabezado.module.css";
import { useIdioma } from "../../contexto/IdiomaContext";

function Encabezado() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const { idioma, cambiarIdioma } = useIdioma();

    const cerrarMenu = () => {
        setMenuAbierto(false);
    };

    const seleccionarIdioma = (nuevoIdioma) => {
        cambiarIdioma(nuevoIdioma);
    };

    return (
        <header className={estilos.encabezado}>

            <div className={estilos.logo}>
                <h1>RODO</h1>
                <p>PRIVATE DRIVER</p>
            </div>

            <button
                className={estilos.menuBoton}
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Abrir menú"
            >
                ☰
            </button>

            <nav
                className={`${estilos.menu} ${
                    menuAbierto ? estilos.menuAbierto : ""
                }`}
            >

                <a href="#inicio" onClick={cerrarMenu}>
                    {idioma === "es" ? "Inicio" : "Home"}
                </a>

                <a href="#servicios" onClick={cerrarMenu}>
                    {idioma === "es" ? "Servicios" : "Services"}
                </a>

                <a href="#turismo" onClick={cerrarMenu}>
                    {idioma === "es" ? "Turismo" : "Tourism"}
                </a>

                <a href="#resenas" onClick={cerrarMenu}>
                    {idioma === "es" ? "Reseñas" : "Reviews"}
                </a>

                <a href="#contacto" onClick={cerrarMenu}>
                    {idioma === "es" ? "Contacto" : "Contact"}
                </a>

                <a
                    href="#contacto"
                    className={estilos.boton}
                    onClick={cerrarMenu}
                >
                    {idioma === "es"
                        ? "Consultar traslado"
                        : "Request a transfer"}
                </a>

                <div className={estilos.idiomas}>

                    <button
                        className={idioma === "es" ? estilos.idiomaActivo : ""}
                        onClick={() => seleccionarIdioma("es")}
                    >
                        🇦🇷 ES
                    </button>

                    <span>|</span>

                    <button
                        className={idioma === "en" ? estilos.idiomaActivo : ""}
                        onClick={() => seleccionarIdioma("en")}
                    >
                        🇬🇧 EN
                    </button>

                </div>

            </nav>

        </header>
    );
}

export default Encabezado;