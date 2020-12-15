import { PotionForm } from './PotionForm';
import PropTypes from 'prop-types';
import React from 'react';

export function PotionUpdate(props) {
    const { potion, onUpdate } = props;

    function handlePotionUpdateSubmission(event) {
        event.preventDefault();
        props.onUpdate({
            title: event.target.title.value,
            attName: event.target.attName.value,
            attMod: event.target.attMod.value,
            volume: parseInt(event.target.volume.value),
            costByVolume: parseInt(event.target.costByVolume.value),
            measurement: event.target.measurement,
            id: potion.id
        });
    }

    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handlePotionUpdateSubmission} /* new code */
                buttonText="Update Potion" potion={potion} />
        </React.Fragment>
    );
}
function EditNewPotion(props) {
    const { potion } = props;

    function handlePotionUpdateSubmission(event) {
        event.preventDefault();
        props.onUpdate({
            title: event.target.title.value,
            attName: event.target.attName.value,
            attMod: event.target.attMod.value,
            flavorText: event.target.flavorText.value,
            volume: parseInt(event.target.volume),
            costByVolume: parseInt(event.target.costByVolume),
            id: potion.id
        });
    }

    return (
        <React.Fragment>
            <PotionForm
                formSubmissionHandler={handlePotionUpdateSubmission} /* new code */
                buttonText="Update Potion" id={potion.id} />
        </React.Fragment>
    );
}
PotionUpdate.propTypes = {
    potion: PropTypes.object,
    onUpdate: PropTypes.func
};

export default PotionUpdate;