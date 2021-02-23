import * as c from './ActionTypes';

export const deletePotion = id => ({
    type: c.DELETE_POTION,
    id
});
export const toggleForm = () => ({
    type: c.TOGGLE_FORM
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
        costByVolume: costByVolume,
        restockRate: restockRate
    }
};

export const updateStock = (id, restockRate, volume) => ({
    type: c.UPDATE_STOCK,
    id: id,
    restockRate: restockRate,
    volume: volume
});