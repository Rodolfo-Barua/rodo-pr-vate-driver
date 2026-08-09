import "./App.css";

import Encabezado from "./componentes/Encabezado/Encabezado";
import Portada from "./componentes/portada/Portada";
import Servicios from "./componentes/Servicios/Servicios";
import PorqueElegirme from "./componentes/PorqueElegirme/PorqueElegirme";
import LugaresTuristicos from "./componentes/LugaresTuristicos/LugaresTuristicos";
import Restaurantes from "./componentes/restaurantes/Restaurantes";
import Cafeterias from "./componentes/cafeterias/Cafeterias";
import Resenas from "./componentes/reseñas/Resenas";
import Contacto from "./componentes/contacto/Contacto";
import PiePagina from "./componentes/PiePagina/PiePagina";

function App() {
  return (
    <>

      <Encabezado />

      <Portada />

      <Servicios />

      <PorqueElegirme />

      <LugaresTuristicos />

      <Restaurantes />

      <Cafeterias />

      <Resenas />

      <Contacto />

      <PiePagina />

    </>
  );
}

export default App;