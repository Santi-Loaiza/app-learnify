import { useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import SideMenu from "../../components/SideMenu/SideMenu"
import './Matriculas.css'
let apiMatriculas = "http://localhost:3000/matriculas"

const Matriculas = () => {
    const [matriculas, setMatriculas] = useState([])
    const [matricula, setMatricula] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Obtener usuario de forma segura
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null")
    const idUsuario = usuario?.id

    const getMatriculas = async () => {
        try {
            const response = await fetch(apiMatriculas)
            if (!response.ok) throw new Error("Error al obtener matrículas")
            const data = await response.json()
            setMatriculas(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getMatriculas()
    }, [])

    useEffect(() => {
        if (matriculas.length > 0 && idUsuario) {
            const matriculaEncontrada = matriculas.find(
                (mat) => mat.id == idUsuario
            )
            setMatricula(matriculaEncontrada || null)
        }
    }, [matriculas, idUsuario])

    if (loading) return <div className="loading">Cargando...</div>
    if (error) return <div className="error">Error: {error}</div>
    if (!matricula) return <div className="no-data">No se encontró matrícula</div>

    return (
        <div className="main-container">
            <SideMenu />
            <section className="main-container-content-matricula">
                <Header />
                <section className="matricula-info">
                    <h1 className="matricula-main-title">Información de matrícula</h1>
                    <div className="matricula-details">
                        <div className="detail-item">
                            <h4>Id de Matricula:</h4>
                            <p>{matricula.id || "No disponible"}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Fecha de matricula</h4>
                            <p>{matricula.fechaMatricula}</p>
                        </div>
                        <div className="identification-section">
                            <h3>Identificación</h3>
                            <section>
                                <div className="detail-item">
                                    <h4>Tipo de Identificación:</h4>
                                    <p>{matricula.tipoIdentificacion || "No disponible"}</p>
                                </div>
                                <div className="detail-item">
                                    <h4>Numero de identificación:</h4>
                                    <p>{matricula.identificacion || "No disponible"}</p>
                                </div>
                            </section>
                        </div>
                        <div className="detail-item">
                            <h4>Curso:</h4>
                            <p>{matricula.curso}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Nombre del estudiante:</h4>
                            <p>{matricula.nombre || "No disponible"}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Apellidos del estudiante:</h4>
                            <p>{matricula.apellidos || "No disponible"}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Edad</h4>
                            <p>{matricula.edad || "No disponible"}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Correo de contacto:</h4>
                            <p>{matricula.correo}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Genero</h4>
                            <p>{matricula.genero}</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Matriculas
