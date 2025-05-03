import Materias from "../pages/Clases/Materias";
import RutaProtegida from "../components/RutaProtegida";
import InicioSesion from "../pages/InicioSesion/InicioSesion";
import MainView from "../pages/MainView/MainView";
import Registro from "../pages/Registro/Registro";

export let enrutador = [
    {
        path: "/MainView",
        element: <RutaProtegida proteger={<MainView />}/>,
    },
    {
        path: "/Clases",
        element: <Materias />
    },
    {
        path: "/",
        element: <InicioSesion />,
    },
    {
        path: "/registro",
        element: <Registro />
    }
]