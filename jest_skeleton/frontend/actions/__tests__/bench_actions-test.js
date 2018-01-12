import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../bench_actions';
import * as ApiUtil from '../../util/bench_api_util';

import { testBenches } from '../../testUtil/bench_helper';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  test('receiveBenches should create an action to receive benches', () => {
    const benches = testBenches;
    const expectedAction = {type: 'RECEIVE_BENCHES', benches};

    expect(actions.receiveBenches(testBenches)).toEqual(expectedAction);
  });
});

describe('async actions', () => {

  test('fetchBenches creates RECEIVE_BENCHES after fetching benches', () => {
    const expectedActions = [
      {type: actions.RECEIVE_BENCHES, benches: testBenches}
    ];

    //dummy function w/ some APIs (which can use in tests)
    ApiUtil.fetchBenches = jest.fn(() => {
      return Promise.resolve(testBenches);
      // returns testBenches;
      // uses Promise so can use .then() on return value
    });

    const store = mockStore({ benches: {} });

    return store.dispatch(actions.fetchBenches()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Explanation of what Promise.resolve does:

// var promise1 = Promise.resolve([1, 2, 3]);

// promise1.then(function (value) {
//   console.log(value);
//   // expected output: Array [1, 2, 3]
// });
