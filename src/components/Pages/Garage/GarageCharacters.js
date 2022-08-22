import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRickMorty } from "../../../context/RickMortyContext";

const GarageCharacters = () => {
  const { createdCharacters, removeCreatedCharacter, clearCharacters } =
    useRickMorty();

  return (
    <>
      <div className="resultados-garage">
        {createdCharacters.map(({ id, name, image, location, gender }) => {
          return (
            <Card
              className="comparing-card mt-4"
              key={id}
              style={{ width: "16rem" }}
            >
              <Card.Img variant="top" src={image} alt={name} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Género: {gender}</ListGroup.Item>
                <ListGroup.Item>Ubicación: {location?.name}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button
                  onClick={() => removeCreatedCharacter(id, name)}
                  className="btn-danger"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div className="div-eliminar-comparacion">
        <Button onClick={() => clearCharacters()} className="btn-danger">
          Eliminar todo el garage
        </Button>
      </div>
    </>
  );
};

export default GarageCharacters;
