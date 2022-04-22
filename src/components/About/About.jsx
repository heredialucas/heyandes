import style from "./About.module.scss"

export default function About() {
  return (
    <div className={style.containerAbout0}>
      <div className={style.containerAbout}>
        <h2 className="aboutTitle"> Hey Andes</h2>
        <hr />
        <p>
          Hola! Cómo están? Espero que muy bien! Primero quisiera agradecerles
          la oportunidad de mostrarles mis habilidades desarrollando.
        </p>
        <p>
          Y en segundo lugar me gustaría hablarles un poco de mi proceso en este
          hermoso reto que me brindaron. !Ahí les va!
        </p>
        <hr />
        <p>
          Modalidad de trabajo realizada:
          <ol>
            REACT / REDUX
            <br />
            <li>Inicialización de proyecto con create-react-app</li>
            <li>Configuración y prueba de Eslint</li>
            <li>Configuración y prueba de Prettier</li>
            <li>Prueba de lint-staged</li>
            <li>Crear estructura de direcctorios y archivos</li>
            <li>Configuración y prueba de Redux con @redux/toolkit</li>
            <li>Configuración y prueba de FireStore</li>
            <li>Creación de peticiones a Firebase</li>
            <li>Creación y diseño de Componentes</li>
            <li>Configuración deploy</li>
            <br />
            GIT / GITHUB
            <br />
            <li>Crear repositorio público</li>
            <li>Configuración de GitHub</li>
            <li>Crear branch para producción (main) </li>
            <li>Crear branch para desarrollo (dev) </li>
            <br />
            FIREBASE / FIRESTORE / HOSTING
            <br />
            <li>Creación y configuración de DDBB</li>
            <li>Cargar JSON con seeder</li>
            <li>Configuración de Firebase Hosting</li>
            <li>Probar deploy</li>
            <br />
            CSS
            <br />
            <li>Crear estilos propios para componentes</li>
            <li>Usar librerías externas (Material UI)</li>
            <li>
              Me tomé la libertad de agregar un Dark Mode,un Loading y este
              About{" "}
            </li>
          </ol>
          <hr />
          Finalmente quisiera agradecerles por esta prueba técnica, ya que no
          son comunes y me gustó mucho realizarla.
          <hr />
          Espero sea de su agrado y puedan disfrutarla, tanto como yo lo hice
          desarrollándola.
          <br />
          ¡Un Abrazo enorme!
        </p>
      </div>
    </div>
  )
}
