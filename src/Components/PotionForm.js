import PropTypes from "prop-types";
import React from "react";

export function PotionForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='attName'
          placeholder='Attribute Name...' />
        <input
          type='text'
          name='attMod'
          placeholder='Modifier...' />
        <input
          type='text'
          name='title'
          placeholder='Potion Title...' />
        <textarea
          name='flavorText'
          placeholder='Flavor Text...' />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

PotionForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default PotionForm;