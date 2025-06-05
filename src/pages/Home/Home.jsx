import { Link } from "react-router-dom"
import { BoltIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

const Home = () => {
    const usuario = JSON.parse(localStorage.getItem("usuario") || "null")
  return (
    <div>
      <section className="main-content">
            <div className='carrusel'>
                <section className='carrusel-content'><h1>Hola {usuario.tipoUsuario}  {usuario.nombre} !</h1></section></div>
            <section className='container-cards-information'>
                <div className='card-main-information'><p>Bienvenido/a a <b>Learnify</b>, la plataforma virtual diseñada para transformar la manera en que los estudiantes de primaria y secundaria aprenden, crecen y se organizan. En Learnify, no solo te conectamos con tus cursos y materiales, sino que te empoderamos para que alcances tu máximo potencial académico de manera intuitiva, dinámica y divertida.</p></div>
                <section className='container-cards-characteristics'>
                    <div><h3>Aprendizaje sin límites</h3><section><p>En Learnify, el aprendizaje no tiene fronteras. Con herramientas interactivas y recursos adaptados a tu nivel, explora, practica y avanza a tu ritmo. ¡Sigue tu progreso y siempre estarás un paso adelante!</p><BoltIcon className='bolt-icon' /></section></div>
                    <div><h3>Organización y tranquilidad</h3><section><p>El éxito académico comienza con una buena organización. En Learnify, todo está en un solo lugar: horarios, tareas, notas y más. Olvida el desorden y enfócate en lo que importa: tu crecimiento.</p><HandThumbUpIcon className='hand-thump-up-icon' /></section></div>
                </section>
            </section>
            {
                usuario.tipoUsuario == "administrador" ?
                    <div className='container-button-administrar-usuarios'>
                        <Link className='button-administrar-usuarios' to="/home/administrador-usuarios" >Administrar usuarios</Link>
                    </div> : null

            }
        </section>
    </div>
  )
}

export default Home
