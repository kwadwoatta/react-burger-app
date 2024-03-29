import React from 'react';
import classes from './DrawerToggler.module.css';

const drawerToggler = props => (
    <div className={classes.DrawerToggler} onClick={props.toggleDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggler;