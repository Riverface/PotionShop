import * as c from './ActionTypes';

export const deletePotion = id => ({
    type: c.DELETE_POTION,
    id
});
export const toggleForm = () => ({
    type: c.TOGGLE_FORM
});
export const addPotion = (potion) => {
    const { title, id, attName, attMod, flavorText, measurement, volume, costByVolume } = potion;
    return {
        type: c.ADD_POTION,
        id: id,
        attName: attName,
        attMod: attMod,
        flavorText: flavorText,
        measurement: measurement,
        volume: volume,
        costByVolume: costByVolume
    }
};

export const updateTime = (id, formattedWaitTime) => ({
    type: c.UPDATE_TIME,
    id: id,
    formattedWaitTime: formattedWaitTime
});