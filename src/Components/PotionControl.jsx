import * as a from './../actions';

import PotionAll from './PotionAll';
import PotionCreate from './PotionCreate';
import PotionRead from './PotionRead';
import PotionUpdate from './PotionUpdate';
import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';

class PotionControl extends React.Component {

    volumeUpdater = () => {
        const { dispatch } = this.props;
        Object.values(this.props.masterPotionAll).forEach(potion => {
            const newVolume = potion.volume + potion.restockRate;
            const action = a.updateStock(potion.id, potion.restockRate, newVolume);
            dispatch(action);
        });
    }

    componentDidMount() {
        const potionAll = this.props.masterPotionAll;
        this.waitTimeUpdateStock = setInterval(() => this.volumeUpdater(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.waitTimeUpdateStock);
    }

    handleEditingPotionInList = (potionToEdit) => {
        const { dispatch } = this.props;
        const action3 = a.addPotion(potionToEdit);
        dispatch(action3);
        const action = a.editingPotion(potionToEdit);
        dispatch(action);
        const action2 = a.selectPotion(null);
        dispatch(action2);
    }

    handleUpdateClick = () => {
        const { dispatch } = this.props;
        const action3 = a.editingPotion(this.props.editingPotion);
        dispatch(action3);
    }

    handleClick = () => {
        const { dispatch } = this.props;
        if (this.props.selectedPotion === null) {
            const action = a.toggleForm(this.props.formVisibleOnPage);
            dispatch(action);
        }
        else {
            const action2 = a.selectPotion(null);
            dispatch(action2);
            const action = a.toggleForm(this.props.formVisibleOnPage);
            dispatch(action);
        }
    }

    sellStockHandler = (quantity) => {
        const { dispatch } = this.props;
        let credit = this.props.debtCredit;
        let potionToEdit = this.props.selectedPotion;
        const newCost = parseInt(quantity) * parseInt(potionToEdit.costByVolume);
        potionToEdit.volume += quantity * 100;
        let debtCredit = this.props.debtCredit;
        debtCredit += newCost;
        const action2 = a.updateAccount(debtCredit);
        dispatch(action2);
        const action = a.addPotion(potionToEdit);
        dispatch(action);
    }

    handleAddingNewPotionToList = (newPotion) => {
        const { dispatch } = this.props;
        const action = a.addPotion(newPotion);
        dispatch(action);
        const action2 = a.toggleForm(this.props.formVisibleOnPage);
        dispatch(action2);
    }

    handleChangingSelectedPotion = (id) => {
        const { dispatch } = this.props;
        const action = a.selectPotion(this.props.masterPotionAll[id]);
        this.props.dispatch(action);
    }

    deleteDialogHandler = () => {
        const { dispatch } = this.props;
        const action3 = a.deletingPotion();
        dispatch(action3);
    }

    handleDeletingPotion = (id) => {
        const { dispatch } = this.props;
        const action2 = a.deletePotion(id);
        dispatch(action2);
        const action = a.selectPotion(null);
        dispatch(action);
        const action3 = a.deletingPotion();
        dispatch(action3);
    }
    render(props) {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.props.editingPotion === true) {
            currentlyVisibleState = <PotionUpdate potion={this.props.selectedPotion} onUpdate={this.handleEditingPotionInList} />
            buttonText = "Return to Potion List";
        } else if (this.props.selectedPotion !== null) {
            currentlyVisibleState = <PotionRead potion={this.props.selectedPotion} deleteDialogHandler={this.deleteDialogHandler} onClickingUpdate={this.handleUpdateClick} stockSell={this.sellStockHandler} deletingPotion={this.props.deletingPotion} handleDeletingPotion={this.handleDeletingPotion} volumeUpdater={this.volumeUpdater} debtcredit={this.props.debtCredit} />
            buttonText = "Return to Potion List";
        } else if (this.props.formVisibleOnPage) {
            currentlyVisibleState = <PotionCreate onNewPotionCreation={this.handleAddingNewPotionToList} />;
            buttonText = "Return to Potion List";
        }
        else {
            currentlyVisibleState = <PotionAll potionAll={this.props.masterPotionAll} onPotionSelection={this.handleChangingSelectedPotion} volumeUpdater={this.volumeUpdater} />;
            buttonText = "Add Potion";
        }

        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={() => this.handleClick}>{buttonText}{ }</button>
                {this.props.debtCredit}
            </ React.Fragment>
        );
    }
}

PotionControl.propTypes = {
    masterPotionAll: PropTypes.object,
    formVisibleOnPage: PropTypes.bool,
    debtCredit: PropTypes.number,
    deletingPotion: PropTypes.bool,
    editingPotion: PropTypes.bool,
    selectedPotion: PropTypes.object
};

const mapStateToProps = state => {
    return {
        masterPotionAll: state.masterPotionAll,
        formVisibleOnPage: state.formVisibleOnPage,
        debtCredit: state.debtCredit,
        deletingPotion: state.deletingPotion,
        editingPotion: state.editingPotion,
        selectedPotion: state.selectedPotion
    }
}

PotionControl = connect(mapStateToProps)(PotionControl);
export default PotionControl;
