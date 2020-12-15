import PropTypes from 'prop-types';
import React from 'react';

export function PotionForm(props) {
  const styling = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh",
    minWidth: "300px",
    minHeight: '2vh',
    maxHeight: '2vh',
    maxWidth: "300px"
  }

  const attNameStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh",
    minWidth: "300px",
    minHeight: '2vh',
    maxHeight: '2vh',
    maxWidth: "300px"
  }

  const attModStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh",
    minWidth: "300px",
    minHeight: '2vh',
    maxHeight: '2vh',
    maxWidth: "300px"
  }

  const potionTitleStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh",
    minWidth: "300px",
    minHeight: '2vh',
    maxHeight: '2vh',
    maxWidth: "300px"
  }

  const flavorTextStyle = {
    border: "1px inset inset",
    borderRadius: "10px",
    margin: "2vh",
    minWidth: "300px",
    minHeight: '8vh',
    maxHeight: '8vh',
    maxWidth: "300px"
  }
  const { potion } = props;
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div>
          Title:
          <input
            style={potionTitleStyle && styling}
            type='text'
            name='title'
            defaultValue={(potion.title == null) ? "" : potion.title}
            placeholder='Potion Title...' />
        </div>
        <div>
          Attribute Name:
          <input
            style={attNameStyle && styling}
            type='text'
            name='attName'
            defaultValue={(potion.attName == null) ? "" : potion.attName}
            placeholder='Attribute Name...' />
        </div>
        <div>
          Attribute Modifier:
          <input
            style={attModStyle && styling}
            type='text'
            name='attMod'
            defaultValue={(potion.attMod == null) ? "" : potion.attMod}
            placeholder='Modifier...' />
        </div>
        <div>
          Volume (in ml):
          <input
            style={attModStyle && styling}
            type='number'
            name='volume'
            defaultValue={(potion.volume == null) ? 0 : potion.volume}
            placeholder='volume' min='0' max='5000' />
        </div>
        <div>
          cost by Volume (100 ml)
          <input
            style={attModStyle && styling}
            type='number'
            name='costByVolume'
            defaultValue={(potion.costByVolume == null) ? 0 : potion.costByVolume}
            placeholder='costByVolume' min='0' max='5000' />
        </div>
        <div>
          <textarea
            style={flavorTextStyle}
            name='flavorText'
            defaultValue={(potion.flavorText == null) ? "" : potion.flavorText}
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
  buttonText: PropTypes.string,
  potion: PropTypes.object
};

export default PotionForm;