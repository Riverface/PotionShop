import selectedPotionReducer from '../../reducers/selected-potion-reducer';

const currentState = {
    1: {
        attMod: "+666",
        attName: "Strength",
        costByVolume: 150,
        flavorText: "POWER OVERWHELMING",
        id: "1",
        measurement: "ml",
        restockRate: 20,
        title: "Potion of mitochondrial awakening",
        volume: 100
    },
    2: {
        attMod: "+5",
        attName: "Dexterity",
        costByVolume: 200,
        flavorText: "It's all about finger strength, baby.",
        id: "2",
        measurement: "ml",
        restockRate: 20,
        title: "Potion of Finger Strength",
        volume: 100
    }
}

describe("selectedPotionReducer", () => {
    test('default', () => {
        expect(selectedPotionReducer(undefined, {
            type: null
        })).toEqual(null);
    });
    test('Should grab a potion from the list', () => {
        expect(selectedPotionReducer(null, {
            type: 'SELECT_POTION', potion: {
                attMod: "+5",
                attName: "Dexterity",
                costByVolume: 200,
                flavorText: "It's all about finger strength, baby.",
                id: "2",
                measurement: "ml",
                restockRate: 20,
                title: "Potion of Finger Strength",
                volume: 100
            }
        })).toEqual(currentState[0]);
    });
    test('no input does nothing', () => {
        expect(selectedPotionReducer(undefined, {
            type: 'SELECT_POTION', potion: undefined
        })).toEqual(undefined);
    });


});