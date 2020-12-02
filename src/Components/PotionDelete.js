import PropTypes from "prop-types";
import React from "react";
import { v4 } from 'uuid'

const styles = { minWidth:"30vw",maxWidth:"30vw", minHeight:"35vh",maxHeight:"35vh", margin:"auto", display:"inline",position:"absolute", border:"10px red outset", borderRadius:"10px", background: "#FA8072", borderStyle:"outset"};


function PotionDelete(props) {
    const { potion, onDelete,  } = props; //new code

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
    onDelete: PropTypes.func
    };

export default PotionDelete;