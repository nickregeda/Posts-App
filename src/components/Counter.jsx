import React, {useState} from 'react';

const Counter = (props) => {
    let [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1)
    }
    let decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;