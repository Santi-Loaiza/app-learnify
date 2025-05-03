import Header from "../../components/Header/Header"
import MainContent from "../../components/MainContent/MainContent"
import SideMenu from "../../components/SideMenu/SideMenu"
import Footer from "../../components/Footer/Footer"
import '../MainView/MainView.css'
import { useNavigate } from "react-router-dom"

const MainView = () => {
    let navigate = useNavigate()
    return(
        <section className="main-container">
            <SideMenu />
            <section className="main-container-content">
                <Header />
                 <MainContent />
                 <Footer />
            </section>
        </section>
    )
}
export default MainView