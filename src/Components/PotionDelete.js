import PropTypes from "prop-types";
import React from "react";
import { v4 } from 'uuid'

const styles = { minWidth:"300px", margin:"auto", display:"inline",position:"absolute", border:"1px solid black"};


function PotionDelete(props) {
    const { potion, onDelete, onClickingUpdate } = props; //new code

    return (
        <div style={styles}>
            <h1>!</h1>
            <h1>Really Remove {potion.title}?</h1>

            <button onClick={() => props.onDelete(props.potion.id)}>Remove potion</button>

        </div>
    );
}

PotionDelete.propTypes = {
    potion: PropTypes.object,
    onDelete: PropTypes.func,
    onClickingUpdate: PropTypes.func // new code
};

export default PotionDelete;