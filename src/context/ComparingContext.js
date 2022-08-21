import { createContext, useState, useContext } from "react";
import swal from "sweetalert";

const ComparingContext = createContext();

export const useComparing = () => useContext(ComparingContext);

export const ComparingProvider = ({ children }) => {
  const [comparing, setComparing] = useState([]);

  const isInComparing = (character) => {
    return comparing.some(
      (comparingCharacter) => comparingCharacter.id === character.id
    );
  };

  const addCharacter = (character) => {
    if (isInComparing(character)) {
      swal({
        title: `${character.name} ya está en la comparación`,
        text: "No puedes volver a agregar a este personaje",
        icon: "error",
        button: "OK",
      });
    } else if (comparing.length >= 3) {
      swal({
        title: "Límite de comparación alcanzado",
        text: "Puedes comparar hasta 3 personajes a la vez. Eliminá personajes para poder agregar otros.",
        icon: "error",
        button: "OK",
      });
    } else {
      const newComparingCharacter = [...comparing, character];
      setComparing(newComparingCharacter);
    }
  };

  const removeCharacter = (characterId, name) => {
    swal({
      title: `¿Querés eliminar a ${name}?`,
      text: "Se eliminará a este personaje de la comparación",
      icon: "warning",
      buttons: ["Salir", "Eliminar!"],
    }).then((willDelete) => {
      if (willDelete) {
        swal(`${name} se eliminó de la comparación`, {
          icon: "success",
        });
        const deleteCharacter = comparing.filter(
          (character) => character.id !== characterId
        );
        setComparing(deleteCharacter);
      } else {
        return;
      }
    });
  };

  const clear = () => {
    swal({
      title: `¿Querés eliminar toda la comparación?`,
      text: "Se eliminarán todos los personajes de la comparación",
      icon: "warning",
      buttons: ["Salir", "Eliminar a todos!"],
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Se eliminaron a todos los personajes de la comparación`, {
          icon: "success",
        });
        setComparing([]);
      } else {
        return;
      }
    });
  };

  const ComparingContextValues = {
    comparing,
    setComparing,
    addCharacter,
    removeCharacter,
    clear,
  };

  return (
    <ComparingContext.Provider value={ComparingContextValues}>
      {children}
    </ComparingContext.Provider>
  );
};
