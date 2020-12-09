import '../App.css';

import PropTypes from "prop-types";
import React from 'react';

function Potion(props) {
    const potionStyle = { width: '100px', height: "100px", fontFamily: "sans-serif", paddingTop: "50px" }
    return (
        <React.Fragment>
            <div onClick={() => props.onSelection(props.id)}>
                <h3>
                    <div>
                        {props.title}
                    </div>
                    <div>
                        <p>Attribute: {props.attName} {props.attMod}/mL</p>
                    </div>
                    <div>
                    <div>
                        <p>Quantity: {props.volume} {props.measurement}</p>
                        </div>
                        <p>{props.flavorText}</p>
                        <p>{props.costByVolume + " GP/vol" } </p>
                    </div>
                </h3>
                <hr />
            </div>
        </React.Fragment>
    );
}

Potion.propTypes = {
    title: PropTypes.string,
    attName: PropTypes.string,
    attMod: PropTypes.string,
    flavorText: PropTypes.string,
    onSelection: PropTypes.func,
    id: PropTypes.string,
    costByVolume: PropTypes.number,
    measurement:PropTypes.string,
    volume:PropTypes.number,
};

export default Potion;


