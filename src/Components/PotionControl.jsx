import React, { PropTypes } from 'react';

import PotionAll from './PotionAll';
import PotionCreate from './PotionCreate';
import PotionDelete from './PotionDelete';
import PotionRead from './PotionRead';
import PotionUpdate from './PotionUpdate';
import { v4 } from 'uuid';

class PotionControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterPotionList: [
                {
                    title: "Potion of mitochondrial awakening",
                    id: v4(),
                    attName: "Strength",
                    attMod: "+666",
                    flavorText: "POWER OVERWHELMING",
                    measurement: "ml",
                    volume: 100,
                    costByVolume: 150
                }, {
                    title: "Potion of Finger Strength",
                    id: v4(),
                    attName: "Dexterity",
                    attMod: "+5",
                    flavorText: "It's all about finger strength, baby.",
                    measurement: "ml",
                    volume: 100,
                    costByVolume: 200
                },
                {
                    title: "Potion of Masochism",
                    id: v4(),
                    attName: "Vitality/Dexterity",
                    attMod: "+5/-5",
                    flavorText: "OUCH. Gimme another!",
                    measurement: "ml",
                    volume: 100,
                    costByVolume: 250
                },
                {
                    title: "Potion of Feebleness",
                    id: v4(),
                    attName: "Strength",
                    attMod: "-2",
                    flavorText: "I was born with glass bones and paper skin. Would you like to buy some chocolate?",
                    measurement: "ml",
                    volume: 100,
                    costByVolume: 100
                },
            ],
            CRUDEPhase: 0,
            selected: null,
            debtCredit: 0
        };
    }
    // CRUD = Create, Read, Update, Delete.

    // CRUDEPhase = CRUD + All ( int )
    // 1 : create, 2 : Read, 3 : Update, 4 : Delete, 5 : All.
    // A mnemonic device.

    inListEditHandler = (potionToEdit) => {
        const allPotionsChanged = this.state.masterPotionList
            .filter(potion => potion.id !== this.state.selectedPotion.id)
            .concat(potionToEdit);
        this.setState({
            masterPotionList: allPotionsChanged,
            CRUDEPhase: 5
        });
    }
    sellStockHandler = (quantity) => {
        const modifier = parseInt(quantity);
        let potionToEdit = this.state.selectedPotion;
        const newCost = parseInt(quantity) * parseInt(potionToEdit.costByVolume);
        const allPotionsChanged = this.state.masterPotionList
        .filter(potion => potion.id !== this.state.selectedPotion.id)
        .concat(potionToEdit);
        potionToEdit.volume += 100 * quantity;
        if (quantity <= this.state.selectedPotion.volume) {
            this.setState(prevState => (
                {
                    masterPotionList: allPotionsChanged,
                    CRUDEPhase: 5,
                    debtCredit: prevState.debtCredit -= newCost
                }
            ))
        }
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

    deleteDialogHandler = (id) => {
        const selectedPotion = this.state.masterPotionList.filter(potion => potion.id === id)[0];
        this.setState({
            CRUDEPhase: 4,
            selectedPotion: selectedPotion,
        });
    }
    createMenuHandler = (id) => {
        this.setState({
            CRUDEPhase: 1
        });
    }

    render(props) {

        let visibleState = null;
        let buttons = null;
        let potionList = <div>
            <PotionAll All={this.state.masterPotionList} onSelection={this.selectionHandler} />
            <p>Account Funds:{this.state.debtCredit}</p>
        </div>;
        // CRUD = Create, Read, Update, Delete.
        // CRUDEPhase = (CRUD, E = Everything) ( int )
        // 1 : create,
        // 2 : Read,
        // 3 : Update,
        // 4 : Delete,
        // Default : Everything (Forced to 5 for sake of acronym.).
        if (this.state.CRUDEPhase > 4 || this.state.CRUDEPhase < 1) {
            buttons = <React.Fragment>
                <button onClick={this.createMenuHandler}>
                    Brew Potion
                    </button>

            </React.Fragment>;
        }
        else {
            buttons = <React.Fragment>
                <button onClick={this.returnHandler}>Back to List</button>
            </React.Fragment>;
        }
        switch (this.state.CRUDEPhase) {
            case 1:
                let potion = {
                    title: "",
                    attName: "",
                    attMod: "",
                    flavorText: "",
                    measurement: "",
                    volume: 0,
                    costByVolume: 0
                }
                visibleState = <PotionCreate onNewPotionCreation={this.createHandler} potion={potion} />;
                break;
            case 2:
                console.log(this.state.selectedPotion);
                visibleState = <PotionRead potion={this.state.selectedPotion} debtCredit={this.state.debtCredit} onClickingUpdate={this.editHandler} deleteDialogHandler={this.deleteDialogHandler} onClickStockSell={this.sellStockHandler} />
                break;
            case 3:
                visibleState = <PotionUpdate potion={this.state.selectedPotion} onUpdate={this.inListEditHandler} />
                break;
            case 4:
                visibleState = <React.Fragment>
                    {<PotionDelete potion={this.state.selectedPotion} onDelete={this.deleteHandler} />}
                    {potionList}

                </React.Fragment>;
                break;
            default:
                visibleState = potionList;
                break;
        }
        return <React.Fragment>
            {visibleState}{buttons}
        </React.Fragment>;
    }
}

export default PotionControl;