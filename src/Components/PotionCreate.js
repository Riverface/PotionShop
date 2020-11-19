import React, { Component } from 'react'

import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid'; // new code

function PotionCreate(props) {
    return (
        <React.Fragment>
            <ReusableForm
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
