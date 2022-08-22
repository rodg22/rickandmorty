import React from "react";
import { Link } from "react-router-dom";
import "./Episodios.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

const EpisodiosData = ({ episodes, cardView }) => {
  return cardView ? (
    <Table className="mt-5" bordered>
      <thead className="table-header">
        <tr>
          <th>N°</th>
          <th>Nombre</th>
          <th>Fecha de emisión</th>
          <th>Código de episodio</th>
          <th>Información</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(({ id, name, air_date, episode }) => {
          return (
            <tr key={id}>
              <td className="table-id">{id}</td>
              <td>{name}</td>
              <td>{air_date}</td>
              <td>{episode}</td>
              <td>
                <Link className="link-info" to={`${id}`}>
                  + info
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  ) : (
    <div className="resultados-comparacion">
      {episodes.map(({ id, name, air_date, episode }) => {
        return (
          <Card
            className="comparing-card mt-4"
            key={id}
            style={{ width: "16rem" }}
          >
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>N° de episodio: {id}</ListGroup.Item>
              <ListGroup.Item>{air_date}</ListGroup.Item>
              <ListGroup.Item>{episode}</ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <Link className="link-info" to={`${id}`}>
                  + info
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
};

export default EpisodiosData;
