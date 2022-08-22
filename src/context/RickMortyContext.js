import { createContext, useState, useEffect, useContext } from "react";
import swal from "sweetalert";

const RickMortyContext = createContext();

export const useRickMorty = () => useContext(RickMortyContext);

export const RickMortyProvider = ({ children }) => {
  //----------------------FOR COMPARING USE-----------------------------
  const [comparing, setComparing] = useState(
    JSON.parse(localStorage.getItem("comparing")) || []
  );

  useEffect(() => {
    localStorage.setItem("comparing", JSON.stringify(comparing));
  }, [comparing]);

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
  //------------------------------------------------------------------------
  //------------------------------FOR CREATING USE--------------------------

  const [createdCharacters, setCreatedCharacters] = useState(
    JSON.parse(localStorage.getItem("createdCharacters")) || []
  );

  useEffect(() => {
    localStorage.setItem(
      "createdCharacters",
      JSON.stringify(createdCharacters)
    );
  }, [createdCharacters]);

  const isCreated = (character) => {
    return createdCharacters.some(
      (createdCharacter) => createdCharacter.name === character.name
    );
  };

  const addCreatedCharacter = (character) => {
    if (isCreated(character)) {
      swal({
        title: `${character.name} ya está creado`,
        text: "No puedes volver a crear a este personaje",
        icon: "error",
        button: "OK",
      });
    } else {
      const newCreatedCharacter = [...createdCharacters, character];
      setCreatedCharacters(newCreatedCharacter);
    }
  };

  const removeCreatedCharacter = (characterId, name) => {
    swal({
      title: `¿Querés eliminar a ${name}?`,
      text: "Se eliminará a este personaje del garage de creación",
      icon: "warning",
      buttons: ["Salir", "Eliminar!"],
    }).then((willDelete) => {
      if (willDelete) {
        swal(`${name} se eliminó del garage`, {
          icon: "success",
        });
        const deleteCharacter = createdCharacters.filter(
          (character) => character.id !== characterId
        );
        setCreatedCharacters(deleteCharacter);
      } else {
        return;
      }
    });
  };

  const clearCharacters = () => {
    swal({
      title: `¿Querés eliminar a todos del garage?`,
      text: "Se eliminarán todos los personajes del garage",
      icon: "warning",
      buttons: ["Salir", "Eliminar a todos!"],
    }).then((willDelete) => {
      if (willDelete) {
        swal(`Se eliminaron a todos los personajes del garage`, {
          icon: "success",
        });
        setCreatedCharacters([]);
      } else {
        return;
      }
    });
  };
  //------------------------------------------------------------------------
  const RickMortyContextValues = {
    comparing,
    setComparing,
    addCharacter,
    removeCharacter,
    clear,
    createdCharacters,
    setCreatedCharacters,
    addCreatedCharacter,
    removeCreatedCharacter,
    clearCharacters,
  };

  return (
    <RickMortyContext.Provider value={RickMortyContextValues}>
      {children}
    </RickMortyContext.Provider>
  );
};
