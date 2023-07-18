import React from 'react';
import '../estilos/footer.css';
import FB from '../imagenes/facebook.jpg';
import IG from '../imagenes/instagram.jpg';
import TB from '../imagenes/tumblr.jpg';
import Nintendo from '../imagenes/nintendo.png'
import Switch from '../imagenes/switch.jpg'
import GB from '../imagenes/game-boy.png'
import N64 from '../imagenes/N64.png'
import GC from '../imagenes/gamecube.png'

function Footer() {
    return (
        <div className="footer">
        <p className="texto-footer">Redes sociales</p>
            <div className="iconos">
                <a href="https://www.facebook.com/gracious.tempest.es/" target="blank" rel="noopener noreferrer"><img className="icono" src={FB} /></a>
                <a href="https://www.instagram.com/your.love.is.like.a.storm/" target="blank" rel="noopener noreferrer"><img className="icono" src={IG}/></a>
                <a href="https://nevercriticstrikemage.tumblr.com" target="blank" rel="noopener noreferrer"><img className="icono" src={TB}/></a>
            </div>
            <div className="marcas">
                <img id="nintendo" src={Nintendo}/>
                <img id="switch" src={Switch}/>
                <img id="gb" src={GB}/>
                <img id="n64" src={N64}/>
                <img id="gc" src={GC}/>
            </div>
        </div>
    );
}

export default Footer;