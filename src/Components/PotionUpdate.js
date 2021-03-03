import { PotionForm } from './PotionForm';
import PropTypes from 'prop-types';
import React from 'react';

export function PotionUpdate(props) {
    const { potion } = props;

    function handlePotionUpdateSubmission(event) {
        event.preventDefault();
        props.onUpdate({
            title: event.target.title.value,
            attName: event.target.attName.value,
            attMod: event.target.attMod.value,
            volume: parseInt(event.target.volume.value),
            costByVolume: parseInt(event.target.costByVolume.value),
            flavorText: event.target.flavorText.value,
            id: potion.id,
            restockRate: event.target.restockRate.value
        });
    }

    return (
        <React.Fragment>
            <PotionForm formSubmissionHandler={handlePotionUpdateSubmission} buttonText="Update Potion" potion={potion} />
        </React.Fragment>
    );
}

PotionUpdate.propTypes = {
    potion: PropTypes.object,
    onUpdate: PropTypes.func
};

export default PotionUpdate;