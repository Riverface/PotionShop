import Potion from "./Potion";
import PropTypes from "prop-types";
import React from "react";
import v4 from "uuid";

function PotionAll(props) {
  const listStyle = {
    minWidth: '75%',
    maxWidth: '75%',
    marginLeft:"12.5%",
    marginRight:"25%",

    fontFamily: "sans-serif",
    paddingTop: "inherit",
    maxHeight: '100px',
    minHeight: '100px',
    border:"inherit",
    margin:10,
    borderStyle:"inset",
    borderColor: "outset"
  }
  return (
    <div style={listStyle}>
      <hr />
      {props.All.map((Potion) =>
        <Potion
          whenPotionClicked={props.onPotionSelection}
          names={Potion.title}
          location={Potion.location}
          attName={Potion.attName}
          id={Potion.id}
          key={Potion.id} />
      )}
    </div>
  );
}

PotionAll.propTypes = {
  All: PropTypes.array,
  onPotionSelection: PropTypes.func
};

export default PotionAll;