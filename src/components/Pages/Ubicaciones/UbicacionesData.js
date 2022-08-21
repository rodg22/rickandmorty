import React from "react";

const UbicacionesData = ({ locations }) => {
  return (
    <tbody>
      {locations.map(({ id, name, type, dimension, residents, created }) => {
        return (
          <tr key={id}>
            <td className="table-id">{id}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{dimension}</td>
            <td>{residents.length}</td>
            <td>{created}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default UbicacionesData;
