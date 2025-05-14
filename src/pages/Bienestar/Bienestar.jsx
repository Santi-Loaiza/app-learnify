import { AcademicCapIcon, HandRaisedIcon, HeartIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import Header from "../../components/Header/Header"
import SideMenu from "../../components/SideMenu/SideMenu"
import './Bienestar.css'

const Bienestar = () => {
    return (
        <section className="main-container">
            <SideMenu />
            <section className="main-container-content">
                <Header />
                <div className="main-container-bienestar">
                    <h1 className="bienestar-main-title">Bienestar institucional</h1>
                    <section className="main-container-info">
                        <div className="first-info">
                        <p>Para nosotros es super importante el bienestar de nuestros estudiantes, este se constituye como uno de los pilares que sustentan el Proyecto Educativo Institucional. Su función principal es generar al interior de la comunidad ambientes para el desarrollo integral de todos sus miembros, por medio de servicios y programas que potencian el desarrollo integral del ser humano desde diferentes subprocesos.</p>
                        </div>
                        <div className="container-bienestar-list">
                            <h3>Para promover el bienestar institucional, se desarrollan programas y servicios para:</h3>
                            <ul>
                                <li className="list-item1">
                                    <div className="list-item-container">
                                        <AcademicCapIcon className="academic-cap-icon"/>
                                        <p>Contribuir al desarrollo de las personas en las dimensiones cultural, social, moral, intelectual, psicoafectiva y física.</p>
                                    </div>
                                </li>
                                <li className="list-item2">
                                    <div className="list-item-container">
                                        <HeartIcon className="heart-icon"/>
                                        <p>Promover acciones que mejoren las condiciones de vida de la comunidad estudiantil. ​​​</p>
                                    </div>
                                </li>
                                <li className="list-item3">
                                    <div className="list-item-container">
                                        <UserGroupIcon className="user-group-icon"/>
                                        <p>Fomentar hábitos y comportamientos que propicien el bienestar, el cuidado en el relacionamiento con otros y con el entorno, a partir del respeto por la diversidad.</p>
                                    </div>
                                </li>
                                <li className="list-item4">
                                    <div className="list-item-container">
                                        <HandRaisedIcon className="hand-raised-icon"/>
                                        <p>Promover y trabajar por una cultura de respeto y una vida libre de violencia y discriminación, en temas de género, diversidad e inclusión, en la comunidad estudiantil.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <section className="container-bienestar-programas">
                            <h4>​La Prestación de programas y servicios que se ofrecen desde la Dirección de Desarrollo Humano - Bienestar Institucional, se llevan a cabo a partir de dos lineas de acción:</h4>
                            <ul>
                                <li className="list-item1">
                                    <div className="list-item-container">
                                        <h5>Centro de bienestar institucional</h5>
                                        <p className="text-1">Servicios dirigidos al cuidado, bienestar y mejoramiento de la calidad de vida estudiantil.</p>
                                        <p className="text-2">Por medio de este puedes contactarnos para reportar algun inconveniente que te haya pasado, en el que necesites de nuestro apoyo y acompañamiento. Tambien si necesitas de ayuda de un profesional en psicologia del que quieras contactar.</p>
                                        <ul className="contactos-list list-1">
                                            <li><p><b>Telefono 1:</b> 301 4862165</p></li>
                                            <li><p><b>Telefono 2:</b> 313 5152623</p></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-item2">
                                    <div className="list-item-container">
                                        <h5>Formación y Desarrollo</h5>
                                        <p className="text-1">Servicios de apoyo que contribuyen al mejoramiento académico y formación integral.</p>
                                        <p className="text-2">Por medio de este puedes contactarnos para sugerencias de mejora. Para que tu voto de apoyo se tome en cuenta</p>
                                        <ul className="contactos-list list-2">
                                            <li><p><b>Telefono 1:</b> 302 4165143</p></li>
                                            <li><p><b>Telefono 2:</b> 303 1242563</p></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default Bienestar
