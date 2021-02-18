import * as c from '../../actions/ActionTypes';

import Moment from 'moment';
import potionAllReducer from '../../reducers/potion-list-reducer';

describe('potionAllReducer', () => {

  let action;

  const currentState = {
    1: {
      names: 'Ryan & Aimen',
      location: '4b',
      issue: 'Redux action is not working correctly.',
      id: 1
    },
    2: {
      names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2
    }
  }

  const potionData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1
  };

  test('Should return default state if no action type is recognized', () => {
    expect(potionAllReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new potion data to masterPotionAll', () => {
    const { names, location, issue, id } = potionData;
    action = {
      type: 'ADD_POTION',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
    expect(potionAllReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should successfully delete a potion', () => {
    action = {
      type: 'DELETE_POTION',
      id: 1
    };
    expect(potionAllReducer(currentState, action)).toEqual({
      2: {
        names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2
      }
    });
  });
  test('Should add a formatted wait time to potion entry', () => {
    const { names, location, issue, timeOpen, id } = potionData;
    action = {
      type: c.UPDATE_TIME,
      formattedWaitTime: '4 minutes',
      id: id
    };
    expect(potionAllReducer({ [id]: potionData }, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test('should successfully add a potion to the potion list that includes Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = potionData;
    action = {
      type: c.ADD_POTION,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(potionAllReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });
});