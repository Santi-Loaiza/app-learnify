import './Header.css'
import logo from '/public/LearnifyLogos/Ilustración_sin_título 1.png'
const Header = () => {
    return (
    
        <header>
            <div class="logo">
            <img src={logo} alt="LogoLearnify" />
        </div>

        <div class="acciones">
            <a href="#" class="btn-login">Iniciar sesión</a>
            <a href="#" class="btn-register">Registrarse</a>
        </div>
        </header>
    )
}
export default Header