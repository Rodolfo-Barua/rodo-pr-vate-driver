import { useState } from "react";
import estilos from "./Encabezado.module.css";

function Encabezado() {
const [menuAbierto, setMenuAbierto] = useState(false);

const cerrarMenu = () => {
    setMenuAbierto(false);
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
            Inicio
        </a>

        <a href="#servicios" onClick={cerrarMenu}>
            Servicios
        </a>

        <a href="#turismo" onClick={cerrarMenu}>
            Turismo
        </a>

        <a href="#resenas" onClick={cerrarMenu}>
            Reseñas
        </a>

        <a href="#contacto" onClick={cerrarMenu}>
            Contacto
        </a>

        <a
        href="#contacto"
        className={estilos.boton}
        onClick={cerrarMenu}
        >
            Consultar traslado
        </a>

    </nav>

    </header>
);
}

export default Encabezado;