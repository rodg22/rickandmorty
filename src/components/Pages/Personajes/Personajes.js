import React, { useState, useEffect } from "react";
import "./Personajes.css";
import SearchBar from "../../SearchBar/SearchBar";
import PersonajesData from "./PersonajesData";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { fillRange } from "../../../helpers/fillRange";

const Personajes = () => {
  const [characters, setCharacters] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  let charactersLength = fillRange(1, 826);

  const URL = `https://rickandmortyapi.com/api/character/${charactersLength}`;

  useEffect(() => {
    axios.get(URL).then((res) => setCharacters(res.data));
  }, [URL]);

  const filteredCharacters = characters.filter((character) =>
    character.name.toUpperCase().includes(querySearch.toUpperCase())
  );

  return (
    <>
      <h2>PERSONAJES</h2>
      <SearchBar
        setQuerySearch={setQuerySearch}
        placeholder="Buscá personajes"
      />
      <div className="resultados-busqueda">
        {querySearch !== "" && <p>Buscaste: "{querySearch}"</p>}
        {filteredCharacters.length === 0 ? (
          characters.length && (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )
        ) : (
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
            <PersonajesData characters={filteredCharacters} />
          </Table>
        )}
      </div>
    </>
  );
};

export default Personajes;
