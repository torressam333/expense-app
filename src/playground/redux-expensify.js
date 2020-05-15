import {createStore, combineReducers} from "redux";

const demoState = {
  expenses: [{
      id: 'd5a5ds',
      description: 'January Rend',
      note: 'Final payment for that address',
      amount: 54500, //Pennies
      createdAt: 0
  }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //Date or amount
        startDate: undefined,
        endDate: undefined,
    }
};

