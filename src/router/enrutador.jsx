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
import AdministradorUsuarios from "../pages/AdministradorUsuarios/AdministradorUsuarios";
import Home from "../pages/Home/Home";

export let enrutador = [
    {
        path: "/Home/",
        element: <RutaProtegida proteger={<MainView />}/>,
        children: [
            {
                path: "/Home/Inicio",
                element: <Home/>
            },
            {
                path: "clases",
                element: <Materias/>
            },
            {
                path: "notas",
                element: <Notas/>
            },
            {
                path: "matriculas",
                element: <Matriculas/>
            },
            {
                path: "bienestar",
                element: <Bienestar/>
            },
            {
                path: "beneficios",
                element: <Beneficios />
            },
            {
                path: "registro-matricula",
                element: <RegistroMatricula />
            },
            {
                path: "administrador-usuarios",
                element: <AdministradorUsuarios/>
            }
            ]
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