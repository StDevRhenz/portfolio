
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
        <div className="max-w-md mx-auto bg-green-100 rounded-xl shadow-md overflow-hidden p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Card Counter</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">Count: <span className="font-semibold text-blue-600">{count}</span></p>
            <div className="flex gap-4 justify-center">
                <button 
                    onClick={increment}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                    Increase
                </button>
                <button 
                    onClick={decrement}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                    Decrease
                </button>
            </div>
        </div>
    );
}

export default CardCounter;