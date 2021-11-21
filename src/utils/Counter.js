import React, {useState} from "react";
import useInterval from "@use-it/interval";

const Counter = ({ delay = 1000 }) => {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount((currentCount) => currentCount + 1);
    }, delay);

    //return <h1>{count}</h1>;
    return count;
};

export default Counter;
