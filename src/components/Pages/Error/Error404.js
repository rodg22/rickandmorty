import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 8000);

  return (
    <>
      <div className="div-pagina-error">
        <h2>Error 404 - Página no encontrada</h2>
        <p>No pudimos encontrar la página que buscabas</p>
        <p>
          En 5 segundos serás redirigido al Home, sino{" "}
          <Link to="/">da click acá.</Link>
        </p>
      </div>
      <div className="div-img-error">
        <img
          src="https://p.favim.com/orig/2018/09/19/morty-gif-funny-Favim.com-6305336.gif"
          alt="Error 404 portal"
        />
      </div>
    </>
  );
};

export default Error404;
