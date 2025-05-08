import { Link } from 'react-router-dom'
import '../Header/Header.css'
import logo from '/LearnifyLogos/Ilustración_sin_título.png'
const Header = () => {
    return (
        <header>
            <Link to="/MainView">
                <div class="logo">
                    <img src={logo} alt="LogoLearnify" />
                </div>
            </Link>
        </header>
    )
}
export default Header