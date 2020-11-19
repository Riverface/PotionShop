import PotionAll from './PotionAll';
import PotionCreate from './PotionCreate';
import PotionDelete from './PotionDelete';
import PotionRead from './PotionRead';
import PotionUpdate from './PotionUpdate';
import React from 'react';
import { v4 } from 'uuid';

class PotionControl extends React.Component {
    constructor(props) {

        this.state = {
            formVisibility: false,
            masterPotionList: false,
            CRUDAphase: 0
        };
    }
    // CRUD = Create, Read, Update, Delete.
    // CRUDAphase = CRUD + All ( int )
    // 1 : create, 2 : Read, 3 : Update, 4 : Delete, 5 : All.
    inListEditHandler = (potionToEdit) => {
        const changedMasterPotionList = this.state.masterPotionList.filter(potion => potion.id !== this.state.selectedPotion.id).concat(potionToEdit);
        this.setState({
            masterPotionList: changedMasterPotionList,
            CRUDAphase: 0
        });
    }
    editHandler = () => {
        console.log("editing!");
        this.setState({ editing: true });
    }
    returnHandler = () => {
        if (this.state.selectedPotion != null) {
            this.setState({ selectedPotion: null, formVisibility: false, editing: false });
        }
        else {
            this.setstate(prevState => ({ formVisibility: !prevState.formVisibility }));
        }
    }
    createHandler = (newPotion) => {
        const newMasterPotionList = this.state.masterPotionList.concat(newPotion);
        this.setState({
            masterPotionList: newMasterPotionList,
            CRUDAphase: 0
        });
    }
    deleteHandler = (id) => {
        const newMasterPotionList = this.state.masterPotionList.filter(potion => potion.id !== this.state.selectedPotion.id);
        this.setState({ masterTicketList: newMasterPotionList, selectedPotion: null });
    }


    render(props) {
        let visibleState = null;
        let buttonText = null;
        // CRUD = Create, Read, Update, Delete.
        // CRUDAphase = CRUD + All ( int )
        // 1 : create, 2 : Read, 3 : Update, 4 : Delete, 5 (or anything else, really) : All.
        switch (props.CRUDAPhase) {
            case 1:
                visibleState = <PotionCreate />
                break;
            case 2:
                visibleState = <PotionRead />
                break;
            case 3:
                visibleState = <PotionUpdate />
                break;
            case 4:
                visibleState = <PotionDelete />
                break;
            default:
                visibleState = <PotionAll />
                break;
        }
        return visibleState;
    }


}