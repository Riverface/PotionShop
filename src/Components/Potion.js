import '../App.css';

import PropTypes from "prop-types";
import React from 'react';

function Potion(props) {
       return (
        <React.Fragment>
            <div onClick={() => props.onPotionSelection(props.id)}>
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
                    <p>Quantity: {props.restockRate} ml/s</p>
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
    onPotionSelection: PropTypes.func,
    id: PropTypes.string,
    costByVolume: PropTypes.number,
    measurement:PropTypes.string,
    volume:PropTypes.number,
    restockRate: PropTypes.number
};

export default Potion;


