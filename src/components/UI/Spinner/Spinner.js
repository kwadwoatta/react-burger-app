import React from 'react';

import classes from './Spinner.module.css'

const spinner = props => (
    <div className={classes.Loader} style={{margin: '250px auto'}}></div>
);

export default spinner;