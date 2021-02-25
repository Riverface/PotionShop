import * as a from './../actions';

import Moment from 'moment';
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
        console.log(props);
        this.state = {
            selectedPotion: null,
            editing: false,
            deleting: false
        };
    }
    startupHandler(potionAll) {
        const { dispatch } = this.props;
        this.setState({
            editing: false,
            selectedPotion: null
        });
        const action = a.startUp(potionAll);
        dispatch(action);

    }
    volumeUpdater = () => {
        const { dispatch } = this.props;
        Object.values(this.props.masterPotionAll).forEach(potion => {
            console.log(potion);
            const newVolume = potion.volume + potion.restockRate;
            const action = a.updateStock(potion.id, potion.restockRate, newVolume);
            dispatch(action);
        });
    }

    componentDidMount() {
        const potionAll = this.props.masterPotionAll;
        
        this.waitTimeUpdateStock = setInterval(() =>
            this.volumeUpdater(),
            1000
        );
        this.startupHandler(potionAll);
    }

    componentDidUpdate() {
        console.log("component updated!");
    }

    componentWillUnmount() {
        console.log("component unmounted!");
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
    handleEditClick = () => {
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
        let potionToEdit = this.state.selectedPotion;
        const newCost = parseInt(quantity) * parseInt(potionToEdit.costByVolume);
        const allPotionsChanged = this.state.masterPotionAll
            .filter(potion => potion.id !== this.state.selectedPotion.id)
            .concat(potionToEdit);
        potionToEdit.volume += 100 * quantity;
        if ((100 * quantity) <= this.state.selectedPotion.volume) {
            this.setState(prevState => (
                {
                    masterPotionAll: allPotionsChanged,
                    debtCredit: prevState.debtCredit -= newCost
                }
            ))
        }
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
    deleteDialogHandler = (id) => {
        const selectedPotion = this.props.masterPotionAll[id];
        this.setState({
            selectedPotion: selectedPotion,
            deleting: true
        });

    }
    handleDeletingPotion = (id) => {
        const { dispatch } = this.props;
        const action = a.deletePotion(id);
        dispatch(action);
        this.setState({ selectedPotion: null });
    }

    render(props) {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.editing) {
            currentlyVisibleState = <PotionUpdate potion={this.state.selectedPotion} onEditPotion={this.handleEditingPotionInList} />
            buttonText = "Return to Potion List";
        } else if (this.state.selectedPotion != null) {
            currentlyVisibleState = <PotionRead potion={this.state.selectedPotion} deleteDialogHandler={this.deleteDialogHandler}  onClickingEdit={this.handleEditClick} />
            buttonText = "Return to Potion List";
            // While our PotionRead component only takes placeholder data, we will eventually be passing the value of selectedPotion as a prop.
        } else if (this.props.formVisibleOnPage) {
            // This conditional needs to be updated to "else if."
            currentlyVisibleState = <PotionCreate onNewPotionCreation={this.handleAddingNewPotionToList} />;
            buttonText = "Return to Potion List";
        }
        else if (this.state.deleting == true) {
            currentlyVisibleState = <PotionDelete onClickingDelete={this.handleDeletingPotion}></PotionDelete>
        }
        else {
            currentlyVisibleState = <PotionAll potionAll={this.props.masterPotionAll} onPotionSelection={this.handleChangingSelectedPotion} />;
            // Because a user will actually be clicking on the potion in the Potion component, we will need to pass our new handleChangingSelectedPotion method as a prop.
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
