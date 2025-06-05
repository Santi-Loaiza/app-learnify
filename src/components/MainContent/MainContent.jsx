import { Link, Outlet } from 'react-router-dom'
import '../MainContent/MainContent.css'
const MainContent = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null")
    return (
        <section className="main-content">
            <Outlet/>
        </section>
    )
}
export default MainContent