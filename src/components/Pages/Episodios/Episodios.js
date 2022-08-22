import React, { useState, useEffect } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import EpisodiosData from "./EpisodiosData";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { fillRange } from "../../../helpers/fillRange";
import ViewSetter from "../../ViewSetter/ViewSetter";

const Episodios = () => {
  const [episodes, setEpisodes] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  let episodesLength = fillRange(1, 51);

  const URL = `https://rickandmortyapi.com/api/episode/${episodesLength}`;

  useEffect(() => {
    axios.get(URL).then((res) => setEpisodes(res.data));
  }, [URL]);

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name
      .toUpperCase()
      .split(" ")
      .join("")
      .includes(querySearch.toUpperCase().split(" ").join(""))
  );

  const [cardView, setCardView] = useState(false);

  return (
    <>
      <h2>EPISODIOS</h2>
      <SearchBar
        setQuerySearch={setQuerySearch}
        placeholder="Buscá episodios por su nombre"
      />
      <div className="resultados-busqueda">
        {querySearch !== "" && <p>Buscaste: "{querySearch}"</p>}
        {filteredEpisodes.length === 0 && (
          <div className="spinner-div">
            <Spinner animation="border" variant="light" />
          </div>
        )}
        {filteredEpisodes.length === 0 ? (
          episodes.length && (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )
        ) : (
          <>
            <ViewSetter cardView={cardView} setCardView={setCardView} />
            <EpisodiosData cardView={cardView} episodes={filteredEpisodes} />
          </>
        )}
      </div>
    </>
  );
};

export default Episodios;
