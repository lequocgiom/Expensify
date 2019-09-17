import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is from my edit expense component
    </div>
)

const HelpPage = () => (
    <div>
        This is from my help component
    </div>
)

const NotfoundPage = () => (
    <div>
        404! - <Link to="\">Go Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" >Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" >Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" >Help</NavLink>
    </header>
)

const routes = (
    
    <BrowserRouter>
        <div>
            <Header/> 
        
            <Switch>
                <Route exact path="/" component = {ExpenseDashboardPage}/>
                <Route path="/create" component = {AddExpensePage} />
                <Route path="/edit" component = {EditExpensePage} />
                <Route path="/help" component = {HelpPage} />
                <Route component = {NotfoundPage} />
                
            </Switch>
        </div>
    </BrowserRouter>
)
ReactDOM.render( routes, document.getElementById('app'));
 