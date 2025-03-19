
import MainContent from "./MainContent"
import SideMenu from "./SideMenu"


const MainView = () => {
    return(
        <section className="main-container">
            <SideMenu />
            <MainContent />
        </section>
    )
}
export default MainView