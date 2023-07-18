import React from 'react';
import {Card} from 'react-bootstrap';
import '../estilos/columna-derecha.css';

function ColumnaD(props){
    return(
    <div>
        <Card className='presentacion-card-d' style={{ width: '15rem', marginLeft: '30px', marginBottom: '50px',  display: 'inline-block' }}>
        <Card.Img className="imagen-d" variant="top" src={props.image} />
        <Card.Body className="body">
            <Card.Title>
            {props.text1}
            </Card.Title>
            <Card.Text>
            {props.text2}
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
      )
}
  export default ColumnaD;