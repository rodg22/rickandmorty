import React, { useState, useEffect } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import UbicacionesData from "./UbicacionesData";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { fillRange } from "../../../helpers/fillRange";

const Ubicaciones = () => {
  const [locations, setLocations] = useState([]);
  const [querySearch, setQuerySearch] = useState("");

  let locationLength = fillRange(1, 126);

  const URL = `https://rickandmortyapi.com/api/location/${locationLength}`;

  useEffect(() => {
    axios.get(URL).then((res) => setLocations(res.data));
  }, [URL]);

  const filteredLocations = locations.filter((location) =>
    location.name.toUpperCase().includes(querySearch.toUpperCase())
  );

  return (
    <>
      <h2>UBICACIONES</h2>
      <SearchBar
        setQuerySearch={setQuerySearch}
        placeholder="Buscá ubicaciones por su nombre"
      />
      <div className="resultados-busqueda">
        {querySearch !== "" && <p>Buscaste: "{querySearch}"</p>}
        {filteredLocations.length === 0 ? (
          locations.length && (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )
        ) : (
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
            <UbicacionesData locations={filteredLocations} />
          </Table>
        )}
      </div>
    </>
  );
};

export default Ubicaciones;
