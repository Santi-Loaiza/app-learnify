import Header from "../../components/Header/Header"
import MainContent from "../../components/MainContent/MainContent"
import SideMenu from "../../components/SideMenu/SideMenu"
import Footer from "../../components/Footer/Footer"
import '../MainView/MainView.css'

const MainView = () => {
    return(
        <section className="main-container">
            <SideMenu />
            <section>
                <Header />
                 <MainContent />
                 <Footer />
            </section>
        </section>
    )
}
export default MainView