import React, { Component } from 'react'

import { PotionForm } from './PotionForm';
import PropTypes from "prop-types";

export function EditPotionForm(props) {
    const { potion } = props;

    function handleEditPotionFormSubmission(event) {
        event.preventDefault();
        props.onEditPotion({
            name: event.target.names.value,
            attName: event.target.attName.value,
            attMod: event.target.attMod.value,
            id: potion.id
        });
    }

    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handleEditPotionFormSubmission} /* new code */
                buttonText="Update Potion" />
        </React.Fragment>
    );
}
function EditNewPotion(props) {
    const { potion } = props;

    function handleEditPotionFormSubmission(event) {
        event.preventDefault();
        props.onEditPotion({
            names: event.target.names.value,
            location: event.target.location.value,
            issue: event.target.issue.value,
            id: potion.id
        });
    }

    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handleEditPotionFormSubmission} /* new code */
                buttonText="Update Potion" id={potion.id} />
        </React.Fragment>
    );
}
EditPotionForm.propTypes = {
    potion: PropTypes.object,
    onEditPotion: PropTypes.func
};

export default EditPotionForm;