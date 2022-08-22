import React, { useState, useEffect } from "react";
import "./Personajes.css";
import SearchBar from "../../SearchBar/SearchBar";
import ViewSetter from "../../ViewSetter/ViewSetter";
import PersonajesData from "./PersonajesData";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { fillRange } from "../../../helpers/fillRange";
import { useRickMorty } from "../../../context/RickMortyContext";

const Personajes = () => {
  const { createdCharacters } = useRickMorty();

  const [characters, setCharacters] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  let charactersLength = fillRange(1, 826);

  const URL = `https://rickandmortyapi.com/api/character/${charactersLength}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => setCharacters([...createdCharacters, ...res.data]));
  }, [createdCharacters, URL]);

  const filteredCharacters = characters.filter((character) =>
    character.name
      .toUpperCase()
      .split(" ")
      .join("")
      .includes(querySearch.toUpperCase().split(" ").join(""))
  );

  const [cardView, setCardView] = useState(false);

  return (
    <>
      <h2>PERSONAJES</h2>
      <SearchBar
        setQuerySearch={setQuerySearch}
        placeholder="Buscá personajes"
      />
      {filteredCharacters.length === 0 && (
        <div className="spinner-div">
          <Spinner animation="border" variant="light" />
        </div>
      )}
      <div className="resultados-busqueda">
        {querySearch !== "" && <p>Buscaste: "{querySearch}"</p>}
        {filteredCharacters.length === 0 ? (
          characters.length && (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )
        ) : (
          <>
            <ViewSetter cardView={cardView} setCardView={setCardView} />
            <PersonajesData
              cardView={cardView}
              characters={filteredCharacters}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Personajes;
