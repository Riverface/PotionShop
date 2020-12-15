import PropTypes from 'prop-types';
import React from 'react';

function PotionRead(props) {
    const { potion,
        deleteDialogHandler,
        onClickingUpdate,
        onClickStockSell,
    } = props; //new code

    return (
        <React.Fragment>
            <h1>
                potion Details
                </h1>
            <h1>
                {potion.title}
            </h1>
            <h3>
                {potion.attName} : {potion.attMod}</h3>
            <p>
                <em>
                    {potion.flavorText}
                </em>
            </p>

            <button onClick={props.onClickingUpdate}>
                Update potion
                </button> { /* new code */}
            <button onClick={() => props.deleteDialogHandler(potion.id)}>
                Remove potion
                </button>
            <div>
                <button onClick={() => props.onClickStockSell(document.getElementById('dosesSold').value)}>Sell(-)/Stock(+)</button>
                <div>
                    <input id="dosesSold" type="number" name="dosesSold" min={-potion.volume} max={potion.volume} ></input>
                    <div></div>
                </div>
            </div>
            <hr />
            
        </React.Fragment>
    );
}

PotionRead.propTypes = {
    potion: PropTypes.object,
    debtCredit: PropTypes.number,
    deleteDialogHandler: PropTypes.func,
    onClickingUpdate: PropTypes.func,
    onClickStockSell: PropTypes.func,

};

export default PotionRead;