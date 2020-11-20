import '../App.css';

import PropTypes from "prop-types";
import React from 'react';

function Potion(props) {
    const potionStyle = { width: '100px', height: "100px", fontFamily: "sans-serif", paddingTop: "50px" }
    return (
        <React.Fragment>

            <div onClick={() => props.whenpotionClicked(props.id)}>
                { /* We add a div with an onClick function. Don't forget to close out the div below! */}
                <h3>
                    {props.name}
                    {props.attName}
                    {props.attMod}
                    {props.flavorText}
                </h3>
                <p><em>{props.id}</em></p>
                <hr />
            </div>
        </React.Fragment>
    );
}

Potion.propTypes = {
    name: PropTypes.string,

};

export default Potion;


