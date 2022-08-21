import React from "react";
import { useComparing } from "../../../context/ComparingContext";
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

  //3 arrays, con los episodios de cada uno
  //   comparing.map(({ episode }) => console.log(episode));

  return (
    <>
      <div className="link-volver-info">
        <Link to="/personajes">Volver a personajes</Link>
      </div>

      {comparing.length ? (
        <>
          <h2>Comparación entre personajes</h2>
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
                    style={{ width: "18rem" }}
                  >
                    <Card.Img variant="top" src={image} alt={name} />
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
                      <ListGroup.Item>*episodios compartidos*</ListGroup.Item>
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
