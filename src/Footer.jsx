import Logo from '../public/LearnifyLogos/Ilustración_sin_título.png'
import LogoFacebook from '../public/FooterIMGs/facebook.png'
import Logoinsta from '../public/FooterIMGs/instagram.png'
import LogoX from '../public/FooterIMGs/twitter.png'
import LogoSnap from '../public/FooterIMGs/Social.png'

const Footer = () => {
    return (

        <footer class="footer">
        <div class="footer-container">
            <div class="footer-logo">
                <h2><a href=""><img src={Logo} alt="" /></a></h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
    
            <div class="footer-links">
                <h3>Enlaces Rápidos</h3>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Soporte</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
    
            <div class="footer-social">
                <h3>Síguenos</h3>
                <div class="social-icons">
                    <a href="#"><img src={LogoFacebook} alt="" /></a>
                    <a href="#"><img src={LogoSnap} alt="" /></a>
                    <a href="#"><img src={Logoinsta} alt="" ></img></a>
                    <a href="#"><img src={LogoX} alt=""  /></a>
                </div>
            </div>
        </div>
    
        <div class="footer-bottom">
            <p>© <span id="year"></span> LearnifyAPP - Todos los derechos reservados 2025 ®️</p>
        </div>
    
        
    </footer>
    
    )
};

export default Footer;
