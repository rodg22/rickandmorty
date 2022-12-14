import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import "./ViewSetter.css";

const ViewSetter = ({ cardView, setCardView }) => {
  return (
    <>
      <div className="div-view-container">
        {cardView ? (
          <FontAwesomeIcon
            title="vista en cards"
            className="view-icon"
            icon={faTableCellsLarge}
            onClick={() => setCardView(!cardView)}
          />
        ) : (
          <FontAwesomeIcon
            title="vista en tabla"
            className="view-icon"
            icon={faTableList}
            onClick={() => setCardView(!cardView)}
          />
        )}
      </div>
    </>
  );
};

export default ViewSetter;
