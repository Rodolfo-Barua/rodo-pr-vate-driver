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
                    {idioma === "es"
                        ? "Inicio"
                        : idioma === "en"
                        ? "Home"
                        : "Início"}
                </a>


                <a href="#servicios" onClick={cerrarMenu}>
                    {idioma === "es"
                        ? "Servicios"
                        : idioma === "en"
                        ? "Services"
                        : "Serviços"}
                </a>


                <a href="#turismo" onClick={cerrarMenu}>
                    {idioma === "es"
                        ? "Turismo"
                        : idioma === "en"
                        ? "Tourism"
                        : "Turismo"}
                </a>


                <a href="#resenas" onClick={cerrarMenu}>
                    {idioma === "es"
                        ? "Reseñas"
                        : idioma === "en"
                        ? "Reviews"
                        : "Avaliações"}
                </a>


                <a href="#contacto" onClick={cerrarMenu}>
                    {idioma === "es"
                        ? "Contacto"
                        : idioma === "en"
                        ? "Contact"
                        : "Contato"}
                </a>


                <a
                    href="#contacto"
                    className={estilos.boton}
                    onClick={cerrarMenu}
                >
                    {idioma === "es"
                        ? "Consultar traslado"
                        : idioma === "en"
                        ? "Request a transfer"
                        : "Solicitar traslado"}
                </a>


                <div className={estilos.idiomas}>

                    <button
                        className={
                            idioma === "es"
                                ? estilos.idiomaActivo
                                : ""
                        }
                        onClick={() =>
                            seleccionarIdioma("es")
                        }
                    >
                        🇦🇷 ES
                    </button>


                    <span>|</span>


                    <button
                        className={
                            idioma === "en"
                                ? estilos.idiomaActivo
                                : ""
                        }
                        onClick={() =>
                            seleccionarIdioma("en")
                        }
                    >
                        🇬🇧 EN
                    </button>


                    <span>|</span>


                    <button
                        className={
                            idioma === "pt"
                                ? estilos.idiomaActivo
                                : ""
                        }
                        onClick={() =>
                            seleccionarIdioma("pt")
                        }
                    >
                        🇧🇷 PT
                    </button>

                </div>

            </nav>

        </header>
    );
}

export default Encabezado;