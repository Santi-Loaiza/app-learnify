import Footer from "./Footer"
import MainContent from "./MainContent"
import SideMenu from "./SideMenu"


const MainView = () => {
    return(
        <section className="main-container">
            <SideMenu />
            <section>
                 <MainContent />
                 <Footer />
            </section>
        </section>
    )
}
export default MainView