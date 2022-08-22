import React from "react";
import { useRickMorty } from "../../../context/RickMortyContext";
import { randomEpisode } from "../../../helpers/randomEpisode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import swal from "sweetalert";

const PersonajesData = ({ characters, cardView }) => {
  const { addCharacter } = useRickMorty();

  const onAdd = (character) => {
    swal({
      title: `¿Querés agregar a ${character.name}?`,
      text: "Se agregará este personaje a la comparación",
      icon: "info",
      buttons: ["Cancelar", "Agregar"],
    }).then((willDelete) => {
      if (willDelete) {
        swal(`${character.name} se agregó a la comparación`, {
          icon: "success",
        });
        addCharacter(character);
      } else {
        return;
      }
    });
  };
  return cardView ? (
    <Table className="mt-5" bordered>
      <thead className="table-header">
        <tr>
          <th>N°</th>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Género</th>
          <th>Ubicación</th>
          <th>Episodio random</th>
          <th>Comparar</th>
        </tr>
      </thead>
      <tbody>
        {characters?.map((character) => {
          return (
            <tr key={character.id}>
              <td className="table-id">{character.id}</td>
              <td className="table-image">
                <img src={character.image} alt={character.name} />
              </td>
              <td>{character.name}</td>
              <td>{character.gender}</td>
              <td>{character.location?.name}</td>
              <td>
                {character.episode !== undefined &&
                  randomEpisode(character.episode)}
              </td>
              <td>
                {character.episode !== undefined && (
                  <span
                    onClick={() => onAdd(character)}
                    className="add-to-comparacion"
                  >
                    +
                    <FontAwesomeIcon icon={faPeopleArrows} />
                  </span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  ) : (
    <div className="resultados-comparacion">
      {characters.map(
        ({ id, image, name, gender, location, species, status, episode }) => {
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
                  {episode !== undefined && randomEpisode(episode)}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          );
        }
      )}
    </div>
  );
};

export default PersonajesData;
