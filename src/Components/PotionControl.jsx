import * as a from './../actions';

import PotionAll from './PotionAll';
import PotionCreate from './PotionCreate';
import PotionDelete from './PotionDelete';
import PotionRead from './PotionRead';
import PotionUpdate from './PotionUpdate';
import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';

class PotionControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPotion: null,
            editing: false,
            deleting: false
        };
    }

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
        this.setState({
            editing: false,
            selectedPotion: null
        });
        const action = a.addPotion(potionToEdit);
        dispatch(action);
    }

    handleUpdateClick = () => {
        this.setState({ editing: true });
    }

    handleClick = () => {
        if (this.state.selectedPotion != null) {
            this.setState({
                selectedPotion: null,
                editing: false
            });
        } else {
            const { dispatch } = this.props;
            const action = a.toggleForm();
            dispatch(action);
        }
    }

    sellStockHandler = (quantity) => {
        const { dispatch } = this.props;
        let potionToEdit = this.state.selectedPotion;
        const newCost = parseInt(quantity) * parseInt(potionToEdit.costByVolume);
        const allPotionsChanged = this.props.masterPotionAll[potionToEdit.id];
        if ((100 * quantity) + potionToEdit.volume > 0) {
            potionToEdit.volume += 100 * quantity;
            this.setState(prevState => ({
                masterPotionAll: allPotionsChanged,
                debtCredit: prevState.debtCredit -= newCost
            }));
        }
        const action = a.addPotion(potionToEdit);
        dispatch(action);
    }

    handleAddingNewPotionToList = (newPotion) => {
        const { dispatch } = this.props;
        const action = a.addPotion(newPotion);
        dispatch(action);
        const action2 = a.toggleForm();
        dispatch(action2);
    }

    handleChangingSelectedPotion = (id) => {
        const selectedPotion = this.props.masterPotionAll[id];
        this.setState({ selectedPotion: selectedPotion });
    }

    deleteDialogHandler = () => {
        this.setState({ deleting: true });
    }
    handleDeletingPotion = (id) => {
        const { dispatch } = this.props;
        const action = a.deletePotion(id);
        dispatch(action);
        this.setState({
            selectedPotion: null,
            deleting: false,
            editing: false
        });
    }
    render(props) {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editing === true) {
            currentlyVisibleState = <PotionUpdate potion={this.state.selectedPotion} onUpdate={this.handleEditingPotionInList} />
            buttonText = "Return to Potion List";
        } else if (this.state.selectedPotion !== null) {
            currentlyVisibleState = <PotionRead potion={this.state.selectedPotion} deleteDialogHandler={this.deleteDialogHandler} onClickingUpdate={this.handleUpdateClick} stockSell={this.sellStockHandler} handleDeletingPotion={this.handleDeletingPotion} deleting={this.state.deleting} volumeUpdater={this.volumeUpdater} />
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
                <button onClick={this.handleClick}>{buttonText}</button>
            </ React.Fragment>
        );
    }
}

PotionControl.propTypes = {
    masterPotionAll: PropTypes.object,
    formVisibleOnPage: PropTypes.bool,
    debtCredit: PropTypes.number
};

const mapStateToProps = state => {
    return {
        masterPotionAll: state.masterPotionAll,
        formVisibleOnPage: state.formVisibleOnPage,
        debtCredit: state.debtCredit
    }
}
PotionControl = connect(mapStateToProps)(PotionControl);
export default PotionControl;
