import PropTypes from 'prop-types';
import React from 'react';

const styles = { minWidth: "30vw", maxWidth: "30vw", minHeight: "35vh", maxHeight: "35vh", margin: "auto", display: "inline", position: "absolute", border: "10px red outset", borderRadius: "10px", background: "#FA8072", borderStyle: "outset", zIndex:"1000" };


function PotionDelete(props) {
    const { potion } = props; //new code

    return (
        <div style={styles}>
            <h1>!</h1>
            <h1>Really Remove {potion.title}?</h1>
            <button onClick={() => props.onClickingDelete(potion.id)}>Remove potion</button>
        </div>
    );
}

PotionDelete.propTypes = {
    potion: PropTypes.object,
    onClickingDelete: PropTypes.func
};

export default PotionDelete;