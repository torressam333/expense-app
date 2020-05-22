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

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({ //Destructure object, if none exist, destructure an empty object
    type: 'REMOVE_EXPENSE',
    id
});


//Expenses Array Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    //Return new state
    switch (action.type)
    {
        case 'ADD_EXPENSE':
            return [
                //old array
                ...state,
                //Create new array with new state
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id); //Return = True: keep item, False: remove item from array
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

//Add an expense
store.subscribe(() =>{
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({
    description: 'Rent',
    amount: '10000'
}));

const expense2 = store.dispatch(addExpense({
    description: 'Coffee',
    amount: '300'
}));

store.dispatch(removeExpense({id: expense1.expense.id}))


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