import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Header from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: true})
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Header showSideDrawer={this.SideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.SideDrawerToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main> 
            </Aux>
        )
    }
} 

export default Layout;