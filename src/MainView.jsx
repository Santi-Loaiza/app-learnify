import MainContent from "./MainContent"
import SideMenu from "./SideMenu"


const MainView = () => {
    return(
        <section className="main-container">
            <SideMenu />
            <MainContent />
            <Footer />
        </section>
    )
}
export default MainView