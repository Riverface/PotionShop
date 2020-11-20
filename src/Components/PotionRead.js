import PropTypes from "prop-types";
import React from "react";
import { v4 } from 'uuid'

function PotionRead(props) {
    const { potion, onClickingDelete, onClickingEdit } = props; //new code

    return (
        <React.Fragment>
            <h1>potion Detail for potion {v4()}</h1>
            <h3>{potion.attName} - {potion.attMod}</h3>
            <p><em>{potion.flavorText}</em></p>
            <button onClick={props.onClickingEdit}>Update potion</button> { /* new code */}
            <button onClick={() => props.onClickingDelete(potion.id)}>Close potion</button>
            <hr />
        </React.Fragment>
    );
}

PotionRead.propTypes = {
    potion: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func // new code
};

export default PotionRead;