import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./Episodios.css";
import PersonajesData from "../Personajes/PersonajesData";

const EpisodiosDataDetail = () => {
  const { episodeId } = useParams();
  const [episodeData, setEpisodeData] = useState([]);
  const [charactersAppearance, setCharactersAppearance] = useState([]);

  const {
    id,
    name,
    episode,
    air_date,
    characters: charactersHTTP,
  } = episodeData;

  const URL = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  useEffect(() => {
    axios.get(URL).then((res) => setEpisodeData(res.data));
  }, [URL]);

  //OBTAINING A CLEAN ARRAY WITH CHARACTERS ID NUMBERS
  let charactersId = charactersHTTP?.map((character) =>
    character.substring(42)
  );

  const charactersURL = `https://rickandmortyapi.com/api/character/${charactersId}`;

  useEffect(() => {
    axios.get(charactersURL).then((res) => setCharactersAppearance(res.data));
  }, [charactersURL]);

  return (
    <>
      <div className="link-volver-info">
        <Link to="/episodios">Volver a Episodios</Link>
      </div>
      <h3 className="detalle-titulo-episodio">
        Detalles del Episodio número: {episodeId}
      </h3>
      <div className="resultados-busqueda">
        <Table className="mt-5" bordered>
          <thead className="table-header">
            <tr>
              <th>N°</th>
              <th>Nombre</th>
              <th>Fecha de emisión</th>
              <th>Código de episodio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-id">{id}</td>
              <td>{name}</td>
              <td>{air_date}</td>
              <td>{episode}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <h3 className="detalle-titulo-episodio">
        Personajes que aparecieron: {charactersHTTP?.length}
      </h3>
      <div className="resultados-busqueda">
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
          <PersonajesData characters={charactersAppearance} />
        </Table>
      </div>
    </>
  );
};

export default EpisodiosDataDetail;
