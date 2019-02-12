import React from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class Dashboard extends React.Component{
    render(){
        return(
          <div>
          <h1>Dashboard</h1>
            Your Profile & current campaigns
            <SurveyList />
            <div className="fixed-action-btn">
                <Link to="/dashboard/new" className="btn-floating btn-large red">
                <i className="material-icons">add_circle</i>
            </Link>
        </div>
          </div>
        );
    }
}

export default Dashboard;