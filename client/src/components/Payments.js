import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
class Payments extends React.Component{
    render(){
        return(
            <StripeCheckout
             name="EmailApp "
            amount={200}
            description="$2 for 2 email credits"
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
        <button className="btn">Add Credits</button>
        </StripeCheckout>
        );

    }
}
export default connect(null, actions)(Payments);