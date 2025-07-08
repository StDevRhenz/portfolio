
import React, {useState} from 'react';


const CardCounter = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="card-counter">
            <h2>Card Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
}

export default CardCounter;