import React from 'react';
import classes from './MyButton.module.css';

const MyButton = (props) => {
    return (
        <button {...props} className={classes.myBtn}> {/*{...props} для передачи параметров кнопки, например disabled.
            Параметры переданные компоненте MyButton будут присвоены button*/}
            {props.children} {/*стандартный prop 'children' для отображения вложенных данных в тег MyButton*/}
        </button>
    );
};

export default MyButton;