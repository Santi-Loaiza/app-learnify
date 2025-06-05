import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Header from "../../components/Header/Header"
import SideMenu from "../../components/SideMenu/SideMenu"
import './RegistroMatricula.css'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { alertaRedireccion } from "../../helpers/funciones"
let apiMatriculas = 'http://localhost:3000/matriculas'


const RegistroMatricula = () => {
    let navigate = useNavigate()
    // Obtener usuario de forma segura
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null")
    const idUsuario = usuario?.id
    const fechaNacimiento = usuario?.datos_personales.fecha_nacimiento
    const nombre = usuario?.nombre


    // Calcular Edad 
    const calcularEdad = (fechaNacimientoParametro) => {
        if (!fechaNacimientoParametro) return ""

        const fechaNac = new Date(fechaNacimientoParametro)
        const hoy = new Date()
        if (fechaNac > hoy) return ""

        let edad = hoy.getFullYear() - fechaNac.getFullYear()
        const mes = hoy.getMonth() - fechaNac.getMonth()
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--
        }

        return edad
    }

    // Actualizar edad cuando cambia fecha de nacimiento
    useEffect(() => {
        const edadCalculada = calcularEdad(fechaNacimiento)
        if (edadCalculada !== "") setEdad(edadCalculada.toString())
    }, [fechaNacimiento])

    //Declaracion de estados
    const [getIdEstudiante, setIdEstudiante] = useState("")
    const [getNombreStorage, setNombreStorage] = useState(nombre)
    const [getNombre, setNombre] = useState("")
    const [getApellidos, setApellidos] = useState("")
    const [getTipoIdentificacion, setTipoIdentificacion] = useState("")
    const [getIdentificacion, setIdentificacion] = useState("")
    const [getCorreo, setCorreo] = useState("")
    const [getEdad, setEdad] = useState(calcularEdad(fechaNacimiento))
    const [getGenero, setGenero] = useState("")
    const [getCurso, setCurso] = useState("")
    const [getFechaMatricula, setFechaMatricula] = useState("")

    useEffect(() => {
        if (idUsuario) {
            setIdEstudiante(idUsuario);
        }
    }, [idUsuario]);

    const primerNombre = getNombreStorage.trim().split(" ")[0];
    function registrarMatricula() {
        let nuevaMatricula = {
            idEstudiante: getIdEstudiante,
            nombre: getNombre,
            apellidos: getApellidos,
            tipoIdentificacion: getTipoIdentificacion,
            correo: getCorreo,
            identificacion: getIdentificacion,
            edad: getEdad,
            genero: getGenero,
            curso: getCurso,
            fechaMatricula: getFechaMatricula
        }
        fetch(apiMatriculas, {
            method: "POST",
            body: JSON.stringify(nuevaMatricula),
        });
        alertaRedireccion(navigate, "La matricula de " + getNombre + " ha sido registrada", "Se redireccionara a la informacion de su matricula", "succes", "/home/matriculas")
    }

    useEffect(() => {
    if (getNombreStorage) {
        setNombre(getNombreStorage); // si quieres poner solo el primer nombre, usa: getNombreStorage.split(" ")[0]
    }
}, [getNombreStorage]);
    return (
                <section className="main-container-form-matricula">
                    <div className="container-icon-back-matricula">
                        <Link to="/home/matriculas">
                            <ChevronLeftIcon className="icon-back-matricula" />
                        </Link>
                    </div>
                    <div>
                        <form className="form form-matricula">
                            <span className="title">Registra tu matricula</span>
                            <span className="subtitle">Ingresa los datos correspondientes de tu matricula</span>
                            <div className="form-container">
                                <div className="input-with-label">
                                    <label> Nombres </label><input
                                        onChange={(e) => setNombre(e.target.value)}
                                        type="text" className="input" placeholder="Ingresa tus nombres" value={getNombre} />
                                </div>
                                <input
                                    onChange={(e) => setApellidos(e.target.value)}
                                    type="text" className="input" placeholder="Apellidos" />
                                <div className="input-with-label">
                                    <label> Tipo de identificacion </label><select onChange={(e) => setTipoIdentificacion(e.target.value)}
                                        className="input"
                                    >
                                        <option value="" disabled>Selecciona tu tipo de documento...</option>
                                        <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                                        <option value="Cedula de Ciudadania">Cedula de Ciudadania</option>
                                        <option value="Pasaporte">Pasaporte</option>
                                    </select>
                                </div>

                                <input
                                    onChange={(e) => setIdentificacion(e.target.value)}
                                    type="text" className="input" placeholder="Numero de identificacion" />
                                <input
                                    onChange={(e) => setCorreo(e.target.value)}
                                    type="email" className="input" placeholder="Correo" />

                                <div className="input-with-label">
                                    <label> Edad </label><input
                                        type="number" className="input" placeholder="Edad" value={getEdad}
                                        onChange={(e) => setEdad(e.target.value)} />
                                </div>
                                <div className="input-with-label">
                                    <label> Genero </label> <select onChange={(e) => setGenero(e.target.value)}
                                        className="input"
                                    >
                                        <option value="" disabled>Selecciona tu genero...</option>
                                        <option value="Maculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                                    </select>
                                </div>
                                <input
                                    onChange={(e) => setCurso(e.target.value)}
                                    type="text" className="input" placeholder="Curso" />
                                <div className="input-with-label">
                                    <label> Fecha de matricula </label>
                                    <input
                                        onChange={(e) => setFechaMatricula(e.target.value)}
                                        type="date" className="input" placeholder="fecha de matricula" />
                                </div>

                            </div>
                            <button type='button' onClick={registrarMatricula}>Registrar</button>
                        </form>
                    </div>
                </section>
    )
}

export default RegistroMatricula
