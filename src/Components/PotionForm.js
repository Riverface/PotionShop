import PropTypes from "prop-types";
import React from "react";

export function PotionForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name=''
          placeholder='Pair Names' />
        <input
          type='text'
          name=''
          placeholder='Location' />
        <textarea
          name='attMod'
          placeholder='Describe your issue.' />
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