import React from "react";
import "./SearchBar.css";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ placeholder, setQuerySearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySearch(e.target.children[0].value);
    e.target.children[0].value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar-container">
      <input
        className="search-input"
        placeholder={placeholder}
        aria-label="personaje"
      />
      <Button type="submit" className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Button>
    </form>
  );
};

export default SearchBar;
