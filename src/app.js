import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "normalize.css/normalize.css";
import './styles/styles.scss';

const ExpenseDashboardPage = () =>(
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () =>(
    <div>This is from my Add Expense component</div>
);

const EditExpensePage = () => (
  <div>This is the edit page</div>
);

const HelpPage = () => (
    <div>This is the help page</div>
);

const NotFound = () => (
    <div>404 - Page Not Found</div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));