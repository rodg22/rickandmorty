import React from "react";
import { Link } from "react-router-dom";
import "./Episodios.css";

const EpisodiosData = ({ episodes }) => {
  return (
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
  );
};

export default EpisodiosData;
