import React, { useState, useEffect } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import EpisodiosData from "./EpisodiosData";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { fillRange } from "../../../helpers/fillRange";

const Episodios = () => {
  const [episodes, setEpisodes] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  let episodesLength = fillRange(1, 51);

  const URL = `https://rickandmortyapi.com/api/episode/${episodesLength}`;

  useEffect(() => {
    axios.get(URL).then((res) => setEpisodes(res.data));
  }, [URL]);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toUpperCase().includes(querySearch.toUpperCase())
  );

  return (
    <>
      <h2>EPISODIOS</h2>
      <SearchBar
        setQuerySearch={setQuerySearch}
        placeholder="Buscá episodios por su nombre"
      />
      <div className="resultados-busqueda">
        {querySearch !== "" && <p>Buscaste: "{querySearch}"</p>}
        {filteredEpisodes.length === 0 ? (
          episodes.length && (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )
        ) : (
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
            <EpisodiosData episodes={filteredEpisodes} />
          </Table>
        )}
      </div>
    </>
  );
};

export default Episodios;
