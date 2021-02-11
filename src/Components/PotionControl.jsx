import * as a from './../actions';

import EditPotionForm from './EditPotionForm';
import NewPotionForm from './NewPotionForm';
import PotionDetail from './PotionDetail';
import PotionList from './PotionList';
import PropTypes from "prop-types";
import React from 'react';
import { connect } from 'react-redux';

class PotionControl extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            selectedPotion: null,
            editing: false
        };
    }

    updatePotionElapsedWaitTime = () => {
        const { dispatch } = this.props;
        Object.values(this.props.masterPotionList).forEach(potion => {  //errors undefined object
            const newFormattedWaitTime = potion.timeOpen.fromNow(true);
            const action = a.updateTime(potion.id, newFormattedWaitTime);
            dispatch(action);
        });
    }

    componentDidMount() {
        this.waitTimeUpdateTimer = setInterval(() =>
            this.updatePotionElapsedWaitTime(),
            1000
        );
    }

    // We won't be using this method for our help queue update - but it's important to see how it works.
    componentDidUpdate() {
        console.log("component updated!");
    }

    componentWillUnmount() {
        console.log("component unmounted!");
        clearInterval(this.waitTimeUpdateTimer);
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


    handleAddingNewPotionToList = (newPotion) => {
        const { dispatch } = this.props;
        const action = a.addPotion(newPotion);
        dispatch(action);
        const action2 = a.toggleForm();
        dispatch(action2);
    }

    handleChangingSelectedPotion = (id) => {
        const selectedPotion = this.props.masterPotionList[id];
        this.setState({ selectedPotion: selectedPotion });
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
            currentlyVisibleState = <EditPotionForm potion={this.state.selectedPotion} onEditPotion={this.handleEditingPotionInList} />
            buttonText = "Return to Potion List";
        } else if (this.state.selectedPotion != null) {
            currentlyVisibleState = <PotionDetail potion={this.state.selectedPotion} onClickingDelete={this.handleDeletingPotion} onClickingEdit={this.handleEditClick} />
            buttonText = "Return to Potion List";
            // While our PotionDetail component only takes placeholder data, we will eventually be passing the value of selectedPotion as a prop.
        } else if (this.props.formVisibleOnPage) {
            // This conditional needs to be updated to "else if."
            currentlyVisibleState = <NewPotionForm onNewPotionCreation={this.handleAddingNewPotionToList} />;
            buttonText = "Return to Potion List";
        } else {
            currentlyVisibleState = <PotionList potionList={this.props.masterPotionList} onPotionSelection={this.handleChangingSelectedPotion} />;
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
    masterPotionList: PropTypes.object,
    formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        masterPotionList: state.masterPotionList,
        formVisibleOnPage: state.formVisibleOnPage
    }
}
PotionControl = connect(mapStateToProps)(PotionControl);
export default PotionControl;