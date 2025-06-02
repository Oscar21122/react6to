import { useState } from 'react';

const useCount = () => {
    const [count, setCount] = useState(0);

    const sum = () => {
        setCount(prevCount => prevCount + 1); 
    };

    const resta = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return { count, sum, resta, reset };
};

export default useCount;