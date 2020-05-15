import {createStore, combineReducers} from "redux";


//EXPENSES REDUCER

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};
const filterReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
      default:
          return state
  }
};

//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer,
    })
);

console.log(store.getState());

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

