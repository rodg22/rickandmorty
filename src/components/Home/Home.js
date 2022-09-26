import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <section className="wallpaper">
        <div>
          <h1>BIENVENIDO!</h1>
          <p>
            <span className="span-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            Desde la barra de navegación podés buscar lo que quieras.
          </p>
          <p>
            <span className="span-icon">
              <FontAwesomeIcon icon={faPeopleArrowsLeftRight} />
            </span>
            Podés comparar personajes (hasta 3 a la vez)
          </p>
          <p>
            <span className="span-icon">
              <FontAwesomeIcon icon={faWarehouse} />
            </span>
            Creá y agregá personajes desde el garage de Rick!
          </p>
          <p>
            <span className="span-icon">
              <FontAwesomeIcon icon={faMusic} />
            </span>
            Podés hacer todo eso escuchando el theme!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
