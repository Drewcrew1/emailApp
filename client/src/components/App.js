import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import NewSurvey from './surveys/NewSurvey';
class App extends Component {

    componentDidMount(){
    this.props.fetchUser();
    }


    render() {
        return (
            < div >
            < BrowserRouter >
            < div >
            < Header / >
            < div className = "container" >
                <Route exact path="/" component={Landing} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/new" component={NewSurvey} />
            < /div>


            </div>
            < /BrowserRouter>
            < /div>
    );
    }
}

export default connect(null, actions)(App);