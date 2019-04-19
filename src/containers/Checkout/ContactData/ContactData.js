import React, { Component } from 'react';
import axios from '../../../axios-orders';

import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        }
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price  
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/orders');
            })
            .catch(error => {
                this.setState({loading: false})
                console.log(error);
            });
    }

    inputChangedHandler = (event, elementIdentifier) => {
        console.log(event.target.value)
        // const prevOrderForm = {
        //     ...this.state.orderForm
        // };
        // prevOrderForm[elementIdentifier].value = event.target.value
        // this.setState({orderForm: prevOrderForm}) 
        
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[elementIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedOrderForm[elementIdentifier] = updatedFormElement
        this.setState({orderForm: updatedOrderForm}) 
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => (
                        <Input 
                            elementType={formElement.config.elementType} 
                            elementConfig={formElement.config.elementConfig} 
                            value={formElement.config.value}
                            key={formElement.id}
                            valueChanged={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    ))
                }
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>            
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        
        return (
            <div className={classes.ContactData}>
                <h4>Enter your phone number</h4>
                {form}
            </div>
        );
    };
};

export default ContactData;