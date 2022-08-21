import React from "react";
import { useComparing } from "../../../context/ComparingContext";
import { randomEpisode } from "../../../helpers/randomEpisode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const PersonajesData = ({ characters }) => {
  const { comparing, addCharacter } = useComparing();

  const onAdd = (character) => {
    swal({
      title: `¿Querés agregar a ${character.name}?`,
      text: "Se agregará este personaje a la comparación",
      icon: "info",
      buttons: ["Cancelar", "Agregar"],
    }).then((willDelete) => {
      if (willDelete) {
        swal(`${character.name} se agregó a la comparación`, {
          icon: "success",
        });
        addCharacter(character);
      } else {
        return;
      }
    });
  };

  return (
    <tbody>
      {characters?.map((character) => {
        return (
          <tr key={character.id}>
            <td className="table-id">{character.id}</td>
            <td className="table-image">
              <img src={character.image} alt={character.name} />
            </td>
            <td>{character.name}</td>
            <td>{character.gender}</td>
            <td>{character.location?.name}</td>
            <td>{randomEpisode(character.episode)}</td>
            <td>
              <span
                onClick={() => onAdd(character)}
                className="add-to-comparacion"
              >
                +
                <FontAwesomeIcon icon={faPeopleArrows} />
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default PersonajesData;
