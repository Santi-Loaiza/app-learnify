import Materias from "../pages/Clases/Materias";
import RutaProtegida from "../components/RutaProtegida";
import InicioSesion from "../pages/InicioSesion/InicioSesion";
import MainView from "../pages/MainView/MainView";
import Registro from "../pages/Registro/Registro";
import Matriculas from "../pages/Matriculas/Matriculas";
import Bienestar from "../pages/Bienestar/Bienestar";
import Notas from "../pages/Notas/Notas";
import Beneficios from "../pages/Beneficios/Beneficios";
import RegistroMatricula from "../pages/RegistroMatricula/RegistroMatricula";

export let enrutador = [
    {
        path: "/MainView",
        element: <RutaProtegida proteger={<MainView />}/>,
    },
    {
        path: "/Clases",
        element: <RutaProtegida proteger={<Materias />}/>,
    },
    {
        path: "/",
        element: <InicioSesion />,
    },
    {
        path: "/registro",
        element: <Registro />
    },
    {
        path: "/matriculas",
        element: <RutaProtegida proteger={<Matriculas />}/>,
    },
    {
        path: "/bienestar",
        element: <RutaProtegida proteger={<Bienestar />}/>,
    },
    {
        path: "/notas",
        element: <RutaProtegida proteger={<Notas/>}/>
    },
    {
        path: "/beneficios",
        element: <RutaProtegida proteger={<Beneficios/>}/>
    },
    {
        path: "/registro-matricula",
        element: <RutaProtegida proteger={<RegistroMatricula/>}/>
    }
]