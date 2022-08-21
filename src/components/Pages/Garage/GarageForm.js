import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Garage.css";

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
    location: "",
    image: "",
  });

  const [createdCharacters, setCreatedCharacters] = useState([]);

  const handleChange = (e) => {
    setNewCharacter({ ...newCharacter, [e.target.name]: e.target.value });
  };

  const submitCharacter = (e) => {
    e.preventDefault();
    setCreatedCharacters([...createdCharacters, newCharacter]);
  };

  console.log(createdCharacters);

  return (
    <div className="garage-form">
      <Form onSubmit={submitCharacter}>
        {inputs.map(({ label, name, placeholder, type }) => (
          <Form.Group key={name} className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control
              value={newCharacter[name]}
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
  );
};

export default GarageForm;
