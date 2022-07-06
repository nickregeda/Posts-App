import React from 'react';

const MySelect = (props) => {
    return (
        <select name="" id="" value={props.value}
                onChange={event => props.onChange(event.target.value)}>
            <option disabled value="">{props.defaultValue}</option>
            {props.options.map(ops =>
                <option key={ops.id} value={ops.value}>{ops.name}</option>
            )}
        </select>
    );
};

export default MySelect;