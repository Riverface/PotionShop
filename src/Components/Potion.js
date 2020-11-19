import '../App.css';

import PropTypes from "prop-types";
import React from 'react';
import jayRef from '../brave_9fFAai3W72.png';

function Potion(props) {
    return (
        <React.Fragment>

            <div onClick={() => props.whenTicketClicked(props.id)}>
                { /* We add a div with an onClick function. Don't forget to close out the div below! */}
                <h3>{props.location} - {props.names}</h3>
                <p><em>{props.issue}</em></p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Potion.propTypes = {
    name: PropTypes.string,

};

export default Potion;


