import React from 'react';

import classes from './Input.module.css';

const input = props => {
    let inputElement = null;

    switch(props.elementType) {
        case('input'):
            inputElement = <input 
                            className={classes.InputElement} 
                            {...props.elementConfig} 
                            value={props.value}
                            onChange={props.valueChanged}/>
            break;
        case('text-area'):
            inputElement = <textarea 
                                className={classes.InputElement} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.valueChanged}/>
            break;
        case('select'):
            inputElement = (
                            <select 
                                className={classes.InputElement}
                                value={props.value}
                                onChange={props.valueChanged}
                            >
                                {props.elementConfig.options.map(option => (
                                        <option 
                                            value={option.value}
                                            key={option.value}
                                        >{option.displayValue}</option>
                                    ))
                                }
                            </select>
            )
            break;
        default:
            inputElement = <input 
                                className={classes.InputElement} 
                                {...props.elementConfig} 
                                value={props.value}
                                onChange={props.valueChanged}/>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )

}

export default input;