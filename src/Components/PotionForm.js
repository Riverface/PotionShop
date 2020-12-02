import PropTypes from "prop-types";
import React from "react";

export function PotionForm(props) {
  const styling = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh"
  }

  const attNameStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh"
  }

  const attModStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh"
  }

  const potionTitleStyle = {
    border: "1px inset inset",
    borderRadius: "10px", margin: "2vh"
  }

  const flavorTextStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh",
    minWidth: '10vw',
    minHeight: '8vh',
    maxWidth: '10vw',
    maxHeight: '8vh'
  }

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div>
          <input
            style={attNameStyle, styling}
            type='text'
            name='attName'
            placeholder='Attribute Name...' />
        </div>
        <div>
          <input
            style={attModStyle, styling}
            type='text'
            name='attMod'
            placeholder='Modifier...' />
        </div>
        <div>
          <input
            style={potionTitleStyle, styling}
            type='text'
            name='title'
            placeholder='Potion Title...' />
        </div>
        <div>
          <textarea
            style={flavorTextStyle}
            name='flavorText'
            placeholder='Flavor Text...' />
        </div>
        <button style={styling} type='submit'>{props.buttonText}</button>
      </form>
      <br />
    </React.Fragment>
  );
}

PotionForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default PotionForm;