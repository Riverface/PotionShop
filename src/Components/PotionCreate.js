import PotionForm from './PotionForm';
import PropTypes from "prop-types";
import React from 'react'
import { v4 } from 'uuid';

function PotionCreate(props) {
    let potion = {};
    return (
        <React.Fragment>
            <PotionForm formSubmissionHandler={handlePotionCreateSubmission} potion={potion} buttonText="Submit Potion" />
        </React.Fragment>
    );

    function handlePotionCreateSubmission(event) {
        event.preventDefault();
        props.onNewPotionCreation({
            title: event.target.title.value,
            attName: event.target.attName.value,
            attMod: event.target.attMod.value,
            flavorText: event.target.flavorText.value,
            volume: parseInt(event.target.volume.value),
            id: v4(),
            costByVolume: parseInt(event.target.costByVolume.value),
            restockRate: parseInt(event.target.restockRate.value)
        });
    }
}
PotionCreate.propTypes = {
    onNewPotionCreation: PropTypes.func,
    volumeUpdater: PropTypes.func
};

export default PotionCreate;
