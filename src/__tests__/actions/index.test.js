import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deletePotion should create DELETE_POTION action', () => {
    expect(actions.deletePotion(1)).toEqual({
      type: 'DELETE_POTION',
      id: 1
    });
  });
});