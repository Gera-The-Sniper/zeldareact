import React from 'react';
import {Card} from 'react-bootstrap';
import '../estilos/columna-izquierda.css';

function ColumnaI(props){
      return(
        <div id="divcard">
    <Card className='presentacion-card' style={{ width: '20rem', marginBottom: '25px', marginTop: '25px'}}>
      <Card.Body id="bod">
        <Card.Title className='texto'>
        {props.text}
        </Card.Title>
      </Card.Body>
      <Card.Img className="imagen" variant="top" src={props.image} />
      </Card>
      </div>
      )
}
  export default ColumnaI;