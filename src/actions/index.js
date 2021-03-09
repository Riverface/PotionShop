import * as c from './ActionTypes';

export const deletePotion = id => ({
    type: c.DELETE_POTION,
    id
});

export const addPotion = (potion) => {
    const { title, id, attName, attMod, flavorText, measurement, volume, costByVolume, restockRate } = potion;
    return {
        type: c.ADD_POTION,
        title: title,
        id: id,
        attName: attName,
        attMod: attMod,
        flavorText: flavorText,
        measurement: measurement,
        volume: volume,
        costByVolume: parseInt(costByVolume),
        restockRate: parseInt(restockRate)
    }
};

export const updateStock = (id, restockRate, volume) => ({
    type: c.UPDATE_STOCK,
    id: id,
    restockRate: parseInt(restockRate),
    volume: parseInt(volume),
});
export const updateAccount = (debtCredit) => ({
    type: c.UPDATE_ACCOUNT,
    debtCredit: debtCredit,
});

export const deletingPotion = (deletingPotion) => ({
    type: c.DELETING_POTION,
    deletingPotion: deletingPotion
});

export const editingPotion = (editingPotion) => ({
    type: c.EDITING_POTION,
    editingPotion: editingPotion
});
export const selectPotion = (selectedPotion, id) => ({
    type: c.SELECT_POTION,
    id: id,
    selectedPotion: selectedPotion
});
export const toggleForm = (formVisibleOnPage) => ({
    type: c.TOGGLE_FORM,
    formVisibleOnPage: formVisibleOnPage,
});