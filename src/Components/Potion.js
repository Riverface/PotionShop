import '../App.css';

import React,  { Component } from 'react';

import PropTypes from "prop-types";

function Potion(props) {
    const potionStyle = { width: '100px', height: "100px", fontFamily: "sans-serif", paddingTop: "50px" }
    return (
        <React.Fragment>
            <div onClick = {() => props.onSelection(props.id)}>
                <h3>
                    <div>
                        {props.title}
                    </div>
                    <div>
                        Attribute: {props.attName} {props.attMod}
                    </div>
                    <div>
                        {props.flavorText}
                    </div>
                </h3>
                <p><em>{props.id}</em></p>
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
    id: PropTypes.string
};

export default Potion;


