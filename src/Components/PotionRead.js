import PotionDelete from './PotionDelete';
import PropTypes from 'prop-types';
import React from 'react';

function PotionRead(props) {
    const { potion } = props; //new code
    console.log(potion);
    let delVis = null;
    if (props.deleting == true) {
        delVis = <PotionDelete onClickingDelete={props.handleDeletingPotion} potion={potion} ></PotionDelete>
    }
    return (
        <React.Fragment>
            <h1>potion Details</h1>
            <h1>{potion.title}</h1>
            <h3> {potion.attName} : {potion.attMod}</h3>
            <p><em>{potion.flavorText}</em></p>
            <button onClick={() => props.onClickingUpdate()}>Update potion</button> { /* new code */}
            <button onClick={() => props.deleteDialogHandler()}>Remove potion</button>
            {delVis}
            <div>
                <button onClick={() => props.stockSell(document.getElementById('dosesSold').value)}>Sell(-)/Stock(+)</button>
                <div>
                    <p>{potion.volume}ml  </p>
                    <p>{(potion.volume / 100)} potion(s)</p>
                    <p>restock rate: {potion.restockRate}</p>
                    Doses to stock/sell: <input id="dosesSold" type="number" name="dosesSold" defaultValue={0} min={-potion.volume} ></input>
                </div>
            </div>
        </React.Fragment>
    );
}

PotionRead.propTypes = {
    potion: PropTypes.object,
    debtCredit: PropTypes.number,
    deleteDialogHandler: PropTypes.func,
    onClickingUpdate: PropTypes.func,
    stockSell: PropTypes.func,
    handleDeletingPotion: PropTypes.func,
    deleting: PropTypes.bool
};

export default PotionRead;