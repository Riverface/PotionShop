import Potion from "./Potion";
import PropTypes from "prop-types";
import React from "react";
import v4 from "uuid";

function PotionAll(props) {
  const listStyle = {
    minWidth: '75%',
    maxWidth: '75%',
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "sans-serif",
    paddingTop: "inherit",
    maxHeight: '100px',
    minHeight: '100px',
    border: "4px inset inset",
    borderWidth: "4px",
    borderStyle: "inset",
    borderRadius: "5px",
  }
  return (
    <div style={listStyle}>
      <hr />
      {props.All.map((potion) =>
        <Potion
          whenPotionClicked={props.onPotionSelection}
          names={potion.title}
          attName={potion.attName}
          attMod={potion.attMod}
          id={potion.id}
          key={potion.id} />
      )}
    </div>
  );
}

PotionAll.propTypes = {
  All: PropTypes.array,
  onPotionSelection: PropTypes.func
};

export default PotionAll;