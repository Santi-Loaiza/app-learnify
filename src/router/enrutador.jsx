import Materias from "../pages/Clases/Materias";
import MainView from "../pages/MainView/MainView";

export let enrutador = [
    {
        path: "/MainView",
        element: <MainView />
    },
    {
        path: "/Clases",
        element: <Materias />
    }
]