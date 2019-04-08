import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this could be a functional component
    componentWillUpdate() {
        console.log('[OrderSummary] did update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => (
            <li key={ingKey}>
                <span style={{textTransform: "capitalize"}}>
                    {ingKey}
                </span>: 
                {this.props.ingredients[ingKey]}
            </li>
            )
        )
        return (
            <Aux>
                <h3>Your burger</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
};

export default OrderSummary;