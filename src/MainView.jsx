import Footer from "./Footer"
import MainContent from "./MainContent"
import SideMenu from "./SideMenu"
import Header from "./Header"


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