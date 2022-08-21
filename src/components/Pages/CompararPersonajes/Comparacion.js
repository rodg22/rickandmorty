import React from "react";
import { useComparing } from "../../../context/ComparingContext";
import { shareEpisodes } from "../../../helpers/shareEpisodes";
import "./Comparacion.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Comparacion = () => {
  const { comparing, clear, removeCharacter } = useComparing();

  return (
    <>
      <div className="link-volver-info">
        <Link to="/personajes">Volver a personajes</Link>
      </div>

      {comparing.length ? (
        <>
          <h2 className="h2-comparacion">Comparación entre personajes</h2>
          <div className="resultados-busqueda">
            {comparing.map(
              ({
                id,
                image,
                name,
                gender,
                location,
                species,
                status,
                episode,
              }) => {
                return (
                  <Card
                    className="comparing-card mt-4"
                    key={id}
                    style={{ width: "16rem" }}
                  >
                    <Card.Img variant="top" src={image} alt={name} />
                    <Badge bg="secondary" className="char-number">
                      {id}
                    </Badge>
                    {(() => {
                      if (status === "Dead") {
                        return (
                          <Badge bg="danger" className="status">
                            {status}
                          </Badge>
                        );
                      } else if (status === "Alive") {
                        return (
                          <Badge bg="success" className="status">
                            {status}
                          </Badge>
                        );
                      } else {
                        return (
                          <Badge bg="secondary" className="status">
                            {status}
                          </Badge>
                        );
                      }
                    })()}
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{gender}</ListGroup.Item>
                      <ListGroup.Item>{location.name}</ListGroup.Item>
                      <ListGroup.Item>{species}</ListGroup.Item>
                      <ListGroup.Item>
                        Estuvo en {episode.length} episodio
                        {episode.length > 1 && "s"}
                      </ListGroup.Item>
                      {comparing.length >= 2 && comparing[0].id !== id && (
                        <ListGroup.Item>
                          Compartió con {comparing[0].name}{" "}
                          <span className="negrita">
                            {shareEpisodes(comparing[0].episode, episode)}
                          </span>{" "}
                          episodios
                        </ListGroup.Item>
                      )}
                      {comparing.length >= 2 && comparing[1].id !== id && (
                        <ListGroup.Item>
                          Compartió con {comparing[1].name}{" "}
                          <span className="negrita">
                            {shareEpisodes(comparing[1].episode, episode)}
                          </span>{" "}
                          episodios
                        </ListGroup.Item>
                      )}
                      {comparing.length >= 3 && comparing[2].id !== id && (
                        <ListGroup.Item>
                          Compartió con {comparing[2].name}{" "}
                          <span className="negrita">
                            {shareEpisodes(comparing[2].episode, episode)}
                          </span>{" "}
                          episodios
                        </ListGroup.Item>
                      )}
                    </ListGroup>
                    <Card.Body>
                      <Button
                        onClick={() => removeCharacter(id, name)}
                        className="btn-danger"
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                    </Card.Body>
                  </Card>
                );
              }
            )}
          </div>
          <div className="div-eliminar-comparacion">
            <Button onClick={() => clear()} className="btn-danger">
              Eliminar toda la comparación
            </Button>
          </div>
        </>
      ) : (
        <h2>Todavía no agregaste personajes a la comparacion</h2>
      )}
    </>
  );
};

export default Comparacion;
