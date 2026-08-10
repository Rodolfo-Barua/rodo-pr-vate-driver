import { createContext, useContext, useState } from "react";

const IdiomaContext = createContext();

export function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = useState(() => {
        return localStorage.getItem("idioma") || "es";
    });

    const cambiarIdioma = (nuevoIdioma) => {
        setIdioma(nuevoIdioma);
        localStorage.setItem("idioma", nuevoIdioma);
    };

    return (
        <IdiomaContext.Provider value={{ idioma, cambiarIdioma }}>
            {children}
        </IdiomaContext.Provider>
    );
}

export function useIdioma() {
    return useContext(IdiomaContext);
}