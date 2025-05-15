import { AcademicCapIcon, BookOpenIcon, GlobeAltIcon, GlobeAmericasIcon, HeartIcon, UserIcon } from '@heroicons/react/24/outline'
import Header from '../../components/Header/Header'
import SideMenu from '../../components/SideMenu/SideMenu'
import './Beneficios.css'

const Beneficios = () => {
    return (
        <section className="main-container">
            <SideMenu />
            <section className="main-container-content">
                <Header />
                <main className='main-container-beneficios'>
                    <div className='header-container'>
                        <h1>Beneficios</h1>
                        <h3>Conoce los pilares que garantizan tu desarrollo integral y los apoyos que ofrece la institución</h3>
                    </div>
                    <section className='main-container-pilares'>
                        <h2>Los pilares de los derechos estudiantiles:</h2>
                        <div className='container-pilares'>
                            <div class="card card-1">
                                <div class="first-content ">
                                    <span><BookOpenIcon className='icon icon-1'/></span>
                                </div>
                                <div class="second-content">
                                    <span><p>Acceso a materiales actualizados, profesores calificados y tecnologías educativas.</p></span>
                                </div>
                            </div>
                            <div class="card card-2">
                                <div class="first-content">
                                    <span><HeartIcon className='icon icon-2'/></span>
                                </div>
                                <div class="second-content">
                                    <span><p>Acompañamiento psicológico, salud física y espacios seguros de aprendizaje.</p></span>
                                </div>
                            </div>
                            <div class="card card-3">
                                <div class="first-content">
                                    <span><GlobeAmericasIcon className='icon icon-3'/></span>
                                </div>
                                <div class="second-content">
                                    <span><p>Respeto a la diversidad, adaptaciones para estudiantes con discapacidad y equidad de género.</p></span>
                                </div>
                            </div>
                            <div class="card card-4">
                                <div class="first-content">
                                    <span><UserIcon className='icon icon-4'/></span>
                                </div>
                                <div class="second-content">
                                    <span> <p>Espacios para representación estudiantil y feedback en decisiones institucionales.</p></span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='main-container-listas'>
                        <h2>Beneficios institucionales</h2>
                        <div className='container-listas-beneficios'>
                            <div className='container-list'>
                                <h3>Beneficios Académicos</h3>
                                <ul className='main-list'>
                                    <li>Control de tu matricula</li>
                                    <li>Acceso a contenido de las clases</li>
                                    <li>Acceso a tus notas y visualizacion de tu progreso</li>
                                </ul>
                            </div>
                            <div className='container-list'>
                                <h3>Beneficios de Bienestar</h3>
                                <ul className='main-list'>
                                    <li>Líneas de atención:
                                        <ul className='sub-list'>
                                            <li>Centro de bienestar institucional</li>
                                            <li>Formación y Desarrollo</li>
                                        </ul>
                                    </li>
                                    <li>Actividades extracurriculares</li>
                                </ul>
                            </div>
                            <div className='container-list'>
                                <h3>Beneficios Materiales</h3>
                                <ul className='main-list'>
                                    <li>Acceso a biblioteca y espacios de integración</li>
                                    <li>Acceso a cafetería</li>
                                    <li>Aulas adecuadas</li>
                                    <li>Acceso a salones de estudio</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </section>
        </section>
    )
}

export default Beneficios
