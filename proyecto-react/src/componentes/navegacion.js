import React from 'react'
import '../estilos/navegacion.css';
import Logo from '../imagenes/zelda-logo.png';
import Persona from '../imagenes/icono-persona.png';
import Busqueda from '../imagenes/busqueda.png';
import Email from '../imagenes/email.png';

function Navegacion() {
  return (
    <div className="navegacion">
      <img id="logo" src={Logo}/>
      <h1 className="titulo-pagina">ZELDA UNIÓN</h1>
      <div className="iconosn">
        <img className="persona" src={Persona}/>
        <img className="persona" src={Busqueda}/>
        <img className="persona" src={Email}/>
      </div>
    </div>
  );
}

export default Navegacion