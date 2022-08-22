import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import "../../assets/fonts/fonts.css";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Audio from "../Audio/Audio";
import { useRickMorty } from "../../context/RickMortyContext";

const Header = () => {
  const { comparing, createdCharacters } = useRickMorty();
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="navbar-container">
          <Navbar.Brand>
            <Link className="logo" to="/">
              Rick and Morty APP
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="navbar-links-container"
            id="responsive-navbar-nav"
          >
            <Nav className="mr-auto">
              <Link
                className="first-link links-spacing links-secciones"
                to="/personajes"
              >
                Personajes
              </Link>
              <Link className="links-spacing links-secciones" to="/ubicaciones">
                Ubicaciones
              </Link>
              <Link className="links-spacing links-secciones" to="/episodios">
                Episodios
              </Link>
              <Link className="links-spacing links-secciones" to="/comparacion">
                <FontAwesomeIcon
                  title="Comparación"
                  icon={faPeopleArrowsLeftRight}
                />{" "}
                {comparing.length !== 0 && (
                  <Badge bg="success">{comparing.length}</Badge>
                )}
              </Link>
              <Link className="links-spacing links-secciones" to="/garage">
                Rick's <FontAwesomeIcon icon={faWarehouse} />{" "}
                {createdCharacters.length !== 0 && (
                  <Badge bg="success">{createdCharacters.length}</Badge>
                )}
              </Link>
            </Nav>
            <Audio />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
