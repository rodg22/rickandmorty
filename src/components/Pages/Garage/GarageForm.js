import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRickMorty } from "../../../context/RickMortyContext";
import "./Garage.css";
import GarageCharacters from "./GarageCharacters";

const inputs = [
  {
    label: "Nombre",
    name: "name",
    placeholder: "Ingresá el nombre de tu personaje",
    type: "text",
  },
  {
    label: "Género",
    name: "gender",
    placeholder: "Ingresá el género de tu personaje",
    type: "text",
  },
  {
    label: "Ubicación",
    name: "location",
    placeholder: "Ingresá la ubicación de residencia",
    type: "text",
  },
  {
    label: "Foto",
    name: "image",
    placeholder: "Ingresá la URL(foto) de tu personaje",
    type: "url",
  },
];

const GarageForm = () => {
  const [newCharacter, setNewCharacter] = useState({
    id: new Date().getTime(),
    name: "",
    gender: "",
    location: {
      name: "",
      id: "",
    },
    image: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "location") {
      setNewCharacter({
        ...newCharacter,
        location: {
          id: newCharacter.id,
          name: e.target.value,
        },
      });
    } else {
      setNewCharacter({
        ...newCharacter,
        [e.target.name]: e.target.value,
      });
    }
  };

  const { createdCharacters, addCreatedCharacter } = useRickMorty();
  const submitCharacter = (e) => {
    e.preventDefault();
    setNewCharacter({
      ...newCharacter,
      id: new Date().getTime(),
      location: {
        ...newCharacter.location,
        id: new Date().getTime(),
      },
    });
    addCreatedCharacter(newCharacter);
  };

  return (
    <>
      <div className="garage-form">
        <Form onSubmit={submitCharacter}>
          {inputs.map(({ label, name, placeholder, type }) => (
            <Form.Group key={name} className="mb-3">
              <Form.Label>{label}</Form.Label>
              <Form.Control
                value={
                  name === "location"
                    ? newCharacter.location.name
                    : newCharacter[name]
                }
                onChange={handleChange}
                name={name}
                type={type}
                placeholder={placeholder}
              />
            </Form.Group>
          ))}
          <Button
            disabled={
              !(
                newCharacter.name &&
                newCharacter.gender &&
                newCharacter.location &&
                newCharacter.image
              )
            }
            variant="primary"
            type="submit"
          >
            Crear personaje
          </Button>
        </Form>
      </div>
      {createdCharacters.length && (
        <>
          <h2 className="h2-personajes-creados">PERSONAJES CREADOS</h2>
          <GarageCharacters />
        </>
      )}
    </>
  );
};

export default GarageForm;
