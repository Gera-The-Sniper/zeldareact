import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ColumnaI from './componentes/columna-izquierda.js';
import Direccion from './componentes/direccion-texto.js';
import ColumnaD from './componentes/columna-derecha.js';
import Navegacion from './componentes/navegacion.js';
import Footer from './componentes/footer.js'
import {Row, Col} from 'react-bootstrap';
import Spirit from './imagenes/spirit.png';
import Trifuerza from './imagenes/trifuerza.png';
import Toon from './imagenes/toon-link.png'
import Ocarina from './imagenes/ocarina.png'
import Twilight from './imagenes/twilight.jpg'
import Otime from './imagenes/otime.jpg'
import Breath from './imagenes/breath.jpg'
import Awakening from './imagenes/awakening.jpg'
import Awakrmk from './imagenes/awakening-rmk.jpg'
import Phantom from './imagenes/phantom.jpg'
import Majora from './imagenes/majora.jpg'

const infoI=[
  {image: Spirit, text: "JUEGOS"},
  {image: Trifuerza, text: "HISTORIA"},
  {image: Toon, text: "PERSONAJES"},
  {image: Ocarina, text: "MUSICA"}
]

const infoD=[
  {image: Twilight, text1: "The Legend Of Zelda: Twilight Princess", text2: "Nintendo Gamecube"},
  {image: Otime, text1: "The Legend Of Zelda: Ocarina Of Time", text2: "Nintendo 64"},
  {image: Breath, text1: "The Legend Of Zelda: Breath Of The Wild", text2: "Nintendo Wii U/Nintendo Switch"},
  {image: Awakening, text1: "The Legend Of Zelda: Link's Awakening", text2: "Nintendo Game Boy"},
  {image: Awakrmk, text1: "The Legend Of Zelda: Link's Awakening Remake", text2: "Nintendo Switch"},
{image: Phantom, text1: "The Legend Of Zelda: Phantom Hourglass", text2: "Nintendo DS"},
{image: Majora, text1: "The Legend Of Zelda: Majora's Mask", text2: "Nintendo 64"},
]

function App() {
  return (
    <div className="App">
      <Navegacion/>
        <div className='contenedor-principal'>
          <div className='contenedor-opciones'>
            <Col>
            {
          infoI.map((item)=>{
            return(
                <ColumnaI image={item.image} text={item.text}/>
            )
          })
          }
            </Col>
          </div>
          <div className="parte-derecha">
          <Direccion/>
          <div className='contenedor-productos' id="contpro">
          <Row>
          {
          infoD.map((item)=>{
            return(
              <Col className="columna-productos">
                <ColumnaD image={item.image} text1={item.text1} text2={item.text2}/>
              </Col>
            )
          })
          }
          </Row>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
