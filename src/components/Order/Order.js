import React from 'react';

import classes from './Order.module.css';

const order = props => {
    const ingredients = Object.keys(props.ingredients)
        .map(ingredientName => {
            return <span 
                        key={ingredientName}
                        style={{
                            textTransform: 'capitalize',
                            display: 'inline-block',
                            margin: '0 8px',
                            border: '1px solid #ccc',
                            padding: '5px'
                        }}
                    >{ingredientName + " (" + props.ingredients[ingredientName] + ")"}</span>
            // return <li key={ingredientName}>{ingredientName + ": " + props.ingredients[ingredientName]}</li>
        })

    console.log(props.ingredients)
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong> </p>
        </div>
    )
}

export default order;