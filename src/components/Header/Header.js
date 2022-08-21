import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import "../../assets/fonts/fonts.css";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Audio from "../Audio/Audio";
import { useComparing } from "../../context/ComparingContext";

const Header = () => {
  const { comparing } = useComparing();
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container className="navbar-container">
          <Link className="logo" to="/">
            Rick and Morty APP
          </Link>
          <Link className="links-secciones" to="/personajes">
            Personajes
          </Link>
          <Link className="links-secciones" to="/ubicaciones">
            Ubicaciones
          </Link>
          <Link className="links-secciones" to="/episodios">
            Episodios
          </Link>
          <Link className="links-secciones" to="/comparacion">
            <FontAwesomeIcon
              title="Comparación"
              icon={faPeopleArrowsLeftRight}
            />{" "}
            {comparing.length !== 0 && (
              <Badge bg="success">{comparing.length}</Badge>
            )}
          </Link>
          <Link className="links-secciones" to="/garage">
            Rick's <FontAwesomeIcon icon={faWarehouse} />
          </Link>
          <Audio />
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
