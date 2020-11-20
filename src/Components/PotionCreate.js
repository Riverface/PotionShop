import React, { Component } from 'react'

import PotionForm from './PotionForm';
import PropTypes from "prop-types";
import { v4 } from 'uuid'; // new code

function PotionCreate(props) {
    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handlePotionCreateSubmission}
                buttonText="Help!" />
        </React.Fragment>
    );

    function handlePotionCreateSubmission(event) {
        console.log(event);
        props.onNewTicketCreation({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4() });
    }

}

PotionCreate.propTypes = {
    onNewTicketCreation: PropTypes.func
};

export default PotionCreate;
