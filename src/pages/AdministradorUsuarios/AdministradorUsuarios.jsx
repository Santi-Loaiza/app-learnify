import { useEffect, useState } from "react";
import Header from "../../components/Header/Header"
import SideMenu from "../../components/SideMenu/SideMenu"
import './AdministradorUsuarios.css'
import GraficoNotasTest2 from "../../components/GraficosNotas/GraficoNotasTest2";
import { alertaConfirmacionEliminarUsuario } from "../../helpers/funciones";
import { Link } from "react-router-dom";
let apiUsuarios = "http://localhost:3000/usuarios";

const AdministradorUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    function getUsuarios() {
        fetch(apiUsuarios)
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUsuarios();
    }, []);


    // Eliminar usuario
    const eliminarUsuario = (id) => {
        alertaConfirmacionEliminarUsuario(id, apiUsuarios, getUsuarios);
    };

    return (
                <main className="main-container-administrador-usuarios">
                    <h1>Administra los usuarios</h1>
                    <section className="container-table-usuarios">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tipo</th>
                                    <th>Nombre</th>
                                    <th>Usuario</th>
                                    <th>Fecha Nacimiento</th>
                                    <th>Dirección</th>
                                    <th>Teléfono</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.length === 0 ? (
                                    <tr>
                                        <td colSpan="8">Cargando o sin usuarios</td>
                                    </tr>
                                ) : (
                                    usuarios.map((usuario) => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.tipoUsuario}</td>
                                            <td>{usuario.nombre}</td>
                                            <td>{usuario.usuario}</td>
                                            <td>{usuario.datos_personales.fecha_nacimiento}</td>
                                            <td>{usuario.datos_personales.direccion}</td>
                                            <td>{usuario.datos_personales.telefono}</td>
                                            <td>
                                                <Link to={"/Home/administrador-usuarios/editar/" + usuario.id}> <button className="editar-usuario-button">Editar</button></Link>{" "}
                                                <button className="eliminar-usuario-button" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </section>
                     <h1>Graficas de Python</h1>
                        <GraficoNotasTest2 />
                </main>
                
    )

     
}

export default AdministradorUsuarios
