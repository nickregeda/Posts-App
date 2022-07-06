import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => { /*обернутый в forwardRef для того, чтобы родительский компонент понимал, на какой именно тег в MyInput ссылаться для ref */
    return (
        <input ref={ref} className={classes.myInput} {...props}/> /*ref будет ссылаться на отмеченый ref параметром тег input*/
    );
});

export default MyInput;