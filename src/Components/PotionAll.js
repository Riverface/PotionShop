import Potion from "./Potion";
import PropTypes from "prop-types";
import React from "react";
import v4 from "uuid";

// remove const masterPotionAll = [ ... ]. We no longer want these.

function PotionAll(props){

  return (
    <React.Fragment>
      <hr/>
      {props.PotionAll.map((Potion) =>

        <Potion
          whenPotionClicked = { props.onPotionSelection }
          names={Potion.names}
          location={Potion.location}
          issue={Potion.issue}
          id={Potion.id}
          key={Potion.id}/>
      )}
    </React.Fragment>
  );
}

PotionAll.propTypes = {
  PotionAll: PropTypes.array,
  onPotionSelection: PropTypes.func
};

export default PotionAll;