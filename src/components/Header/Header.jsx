import '../Header/Header.css'
import logo from '/LearnifyLogos/Ilustración_sin_título.png'
const Header = () => {
    return (
        <header>
            <div class="logo">
            <img src={logo} alt="LogoLearnify" />
        </div>
        </header>
    )
}
export default Header