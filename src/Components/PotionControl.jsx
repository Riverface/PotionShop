import PotionAll from './PotionAll';
import PotionCreate from './PotionCreate';
import PotionDelete from './PotionDelete';
import PotionRead from './PotionRead';
import PotionUpdate from './PotionUpdate';
import React from 'react';
import { v4 } from 'uuid';

class PotionControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibility: false,
            masterPotionList: [
                {
                    name: "fuckyou",
                    id:"0",
                    attName:"scoop",
                    attMod:"0"
                }
            ],
            CRUDAphase: 0,
            selected: null
        };
    }
    // CRUD = Create, Read, Update, Delete.

    // CRUDAphase = CRUD + All ( int )

    // 1 : create, 2 : Read, 3 : Update, 4 : Delete, 5 : All.

    inListEditHandler = (potionToEdit) => {
        const allPotionsChanged = this.state.masterPotionList.filter(potion => potion.id !== this.state.selectedPotion.id).concat(potionToEdit);
        this.setState({
            masterPotionList: allPotionsChanged,
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
    selectionHandler = (id) => {
        const selectedPotion = this.state.masterPotionList.filter(potion => potion.id === id)[0];
        this.setState({ selectedPotion: selectedPotion });
    }
    deleteHandler = (id) => {
        const newMasterPotionList = this.state.masterPotionList.filter(potion => potion.id !== this.state.selectedPotion.id);
        this.setState({ masterPotionList: newMasterPotionList, selectedPotion: null });
    }


    render(props) {
        let visibleState = null;
        let backButton = null;
        // CRUD = Create, Read, Update, Delete.
        // CRUDAphase = (CRUD, A = All) ( int )
        // 1 : create, 2 : Read, 3 : Update, 4 : Delete, 5 (or anything else, really) : All (Force to 5).

        switch (this.state.CRUDAPhase) {
            case 1:
                backButton = "Show all Potions";
                visibleState = <PotionCreate selectedPotionId={this.selected} onEditing={this.createHandler} />
                break;
            case 2:
                backButton = "Show all Potions";
                visibleState = <PotionRead />
                break;
            case 3:
                backButton = "Show all Potions";
                visibleState = <PotionUpdate />
                break;
            case 4:
                backButton = "Show all Potions";
                visibleState = <PotionDelete />
                break;
            default:
                backButton = "Show All Potions";
                visibleState = <PotionAll All={this.state.masterPotionList} onSelection={this.selectionHandler} />
                break;
        }
        return visibleState;
    }


}

export default PotionControl;