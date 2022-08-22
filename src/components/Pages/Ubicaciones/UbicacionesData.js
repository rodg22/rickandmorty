import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";

const UbicacionesData = ({ locations, cardView }) => {
  return cardView ? (
    <Table className="mt-5" bordered>
      <thead className="table-header">
        <tr>
          <th>N°</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Dimensión</th>
          <th>Cant. residentes</th>
          <th>Fecha de creación</th>
        </tr>
      </thead>
      <tbody>
        {locations.map(({ id, name, type, dimension, residents, created }) => {
          return (
            <tr key={id}>
              <td className="table-id">{id}</td>
              <td>{name}</td>
              <td>{type}</td>
              <td>{dimension}</td>
              <td>{residents !== undefined && residents.length}</td>
              <td>{created}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  ) : (
    <div className="resultados-comparacion">
      {locations.map(({ id, name, type, dimension, residents, created }) => {
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
              <ListGroup.Item>{id}</ListGroup.Item>
              <ListGroup.Item>{type}</ListGroup.Item>
              <ListGroup.Item>{dimension}</ListGroup.Item>
              <ListGroup.Item>
                {residents !== undefined && residents.length}
              </ListGroup.Item>
              <ListGroup.Item>{created}</ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
};

export default UbicacionesData;
