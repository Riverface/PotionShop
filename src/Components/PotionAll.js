import Potion from './Potion';
import PropTypes from 'prop-types';
import React from 'react';

function PotionAll(props) {
  const listStyle = {
    minWidth: '75%',
    maxWidth: '75%',
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "sans-serif",
    paddingTop: "inherit",
    maxHeight: '300px',
    minHeight: '300px',
    overflow: 'auto',
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
          onSelection={props.onSelection}
          title={potion.title}
          attName={potion.attName}
          attMod={potion.attMod}
          id={potion.id}
          volume={potion.volume}
          measurement={potion.measurement}
          flavorText={potion.flavorText}
          costByVolume={potion.costByVolume}
          key={potion.id} />
      )}
    </div>
  );
}

PotionAll.propTypes = {
  All: PropTypes.array,
  onSelection: PropTypes.func
};

export default PotionAll;