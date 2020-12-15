import PotionForm from './PotionForm';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 } from 'uuid';

function PotionCreate(props) {

    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handlePotionCreateSubmission}
                buttonText="Sell me this, Potion Seller!" potion={props.potion} />
        </React.Fragment>
    );

    function handlePotionCreateSubmission(event) {
        props.onNewPotionCreation({
            title: event.target.title.value,
            attName: event.target.attName.value,
            attMod: event.target.attMod.value,
            flavorText: event.target.flavorText.value,
            volume: parseInt(event.target.volume.value),
            id: v4(),
            costByVolume:parseInt(event.target.costByVolume.value)
        });
    }

}

PotionCreate.propTypes = {
    potion: PropTypes.object,
    onNewPotionCreation: PropTypes.func
};

export default PotionCreate;
