import {createStore, combineReducers} from "redux";
import uuid from 'uuid';

/*Action Generators*/

//ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note='',
        amount = 0,
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


//Expenses Array Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    //Return new state
    switch (action.type)
    {
        default:
            return state;
    }
};

//Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    //Return new state
    switch (action.type)
    {
        default:
            return state;
    }
};


//Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    //Expenses array and relevant data
    expenses: [{
        id: 'fakeID',
        description: 'June Rent',
        note: 'This is final payment for June',
        amount: 54500,
        createdAt: 0
    }],
    //Filters users can apply
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

/*
* Create a reducer for Expenses and one for Filters
* Use combineReducers to combine them together to create
  the complete store.
* */
