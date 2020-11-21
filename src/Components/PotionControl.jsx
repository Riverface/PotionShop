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
            masterPotionList: [
                {
                    title: "Potion of Power",
                    id: v4(),
                    attName: "Strength",
                    attMod: "+1"
                }, {
                    title: "Potion of Finger Strength",
                    id: v4(),
                    attName: "Dexterity",
                    attMod: "+5"
                },
                {
                    title: "Potion of Masochism",
                    id: v4(),
                    attName: "Vitality/Dexterity",
                    attMod: "+5/-5"
                },
                {
                    title: "Potion of Feebleness",
                    id: v4(),
                    attName: "Strength",
                    attMod: "-2"
                },
            ],

            CRUDEPhase: 0,
            selected: null
        };
    }
    // CRUD = Create, Read, Update, Delete.

    // CRUDEPhase = CRUD + All ( int )

    // 1 : create, 2 : Read, 3 : Update, 4 : Delete, 5 : All.

    inListEditHandler = (potionToEdit) => {
        const allPotionsChanged = this.state.masterPotionList
            .filter(potion => potion.id !== this.state.selectedPotion.id)
            .concat(potionToEdit);
        this.setState({
            masterPotionList: allPotionsChanged,
            CRUDEPhase: 5
        });
    }
    editHandler = () => {
        console.log("editing!");
        this.setState({
            CRUDEPhase: 3
        });
    }
    returnHandler = () => {
        if (this.state.selectedPotion != null) {
            this.setState({ selectedPotion: null, CRUDEPhase: 5 });
        }
        else {
            this.setState(prevState => (
                {
                    CRUDEPhase: !prevState.CRUDEPhase
                }
            )
            );
        }
    }
    createHandler = (newPotion) => {
        const newMasterPotionList = this.state.masterPotionList.concat(newPotion);
        this.setState({
            masterPotionList: newMasterPotionList,
            CRUDEPhase: 5
        });
    }

    selectionHandler = (id) => {
        const selectedPotion = this.state.masterPotionList.filter(potion => potion.id === id)[0];
        console.log(selectedPotion);
        this.setState({
            selectedPotion: selectedPotion,
            CRUDEPhase: 2
        });
    }

    deleteHandler = (id) => {
        const newMasterPotionList = this.state.masterPotionList.filter(potion => potion.id !== this.state.selectedPotion.id);
        this.setState({
            masterPotionList: newMasterPotionList,
            selectedPotion: null,
            CRUDEPhase: 5
        });
    }


    render(props) {
        let visibleState = null;
        let backButton = null;
        // CRUD = Create, Read, Update, Delete.
        // CRUDEPhase = (CRUD, E = Everything) ( int )
        // 1 : create, 
        // 2 : Read, 
        // 3 : Update, 
        // 4 : Delete, 
        // Default : Everything (Forced to 5 for sake of acronym.).
        switch (this.state.CRUDEPhase) {
            case 1:
                backButton = "Back to List";
                visibleState = <PotionCreate selectedPotion={this.selectedPotion} onEditing={this.createHandler} />
                break;
            case 2:
                backButton = "Back to List";
                console.log(this.selectedPotion);
                visibleState = <PotionRead potion={this.state.selectedPotion}/>
                break;
            case 3:
                backButton = "Back to List";
                visibleState = <PotionUpdate onUpdate={this.updateHandler} />
                break;
            case 4:
                backButton = "Back to List";
                visibleState = <PotionDelete onDelete={this.deleteHandler} />
                break;
            default:
                visibleState = <PotionAll All={this.state.masterPotionList} onSelection={this.selectionHandler} />
                break;
        }
        return <React.Fragment>
            {
                visibleState
            }
            {backButton}
        </React.Fragment>;
    }


}

export default PotionControl;