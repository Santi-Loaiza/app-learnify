import Logo from '../../../public/LearnifyLogos/Ilustración_sin_título.png'
import LogoFacebook from '../../../public/FooterIMGs/facebook.png'
import Logoinsta from '../../../public/FooterIMGs/instagram.png'
import LogoX from '../../../public/FooterIMGs/twitter.png'
import LogoSnap from '../../../public/FooterIMGs/Social.png'
import '../Footer/Footer.css'

const Footer = () => {
    return (

        <footer className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <h2><a href=""><img src={Logo} alt="" /></a></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
    
            <div className="footer-links">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Soporte</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
    
            <div className="footer-social">
                <h3>Síguenos</h3>
                <div className="social-icons">
                    <a href="#"><img src={LogoFacebook} alt="" /></a>
                    <a href="#"><img src={LogoSnap} alt="" /></a>
                    <a href="#"><img src={Logoinsta} alt="" ></img></a>
                    <a href="#"><img src={LogoX} alt=""  /></a>
                </div>
            </div>
        </div>
    
        <div className="footer-bottom">
            <p>© <span id="year"></span> LearnifyAPP - Todos los derechos reservados 2025 ®️</p>
        </div>
    
        
    </footer>
    
    )
};

export default Footer;
