import React, { Component } from 'react'

import PotionForm from './PotionForm';
import PropTypes from "prop-types";
import { v4 } from 'uuid'; // new code

function PotionCreate(props) {
    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handlePotionCreateSubmission}
                buttonText="Sell me this, Potion Seller!" />
        </React.Fragment>
    );

    function handlePotionCreateSubmission(event) {
        console.log(event);
        props.onNewPotionCreation({ title: event.target.title.value, attName: event.target.attName.value, attMod: event.target.attMod.value, flavorText: event.target.flavorText.value, id: v4() });
    }

}

PotionCreate.propTypes = {
    onNewPotionCreation: PropTypes.func
};

export default PotionCreate;
