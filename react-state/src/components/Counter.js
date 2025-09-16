import { useState } from "react";
// state creates interaction-based variables that React tracks
// when state changes, React re-renders the component

const Counter = () => {

    //state hook [state variable, function name] = useState(initial value)
    const [count, setCount] =  useState(0);


    const handleAdd = () => {
        setCount(count + 1);
        // NEVER DIRECTLY MUTATE STATE: count = count + 1; // WRONG
    }

    const handleSubtract = () => {
        if (count === 0) {
            return; // do nothing
        }
        setCount(count - 1);
    }

    //return JSX
    return (
        <div>
            <h1> counter: {count} </h1>
            <button
            onClick = {handleAdd}
            > [+] </button>
            <button
            onClick = {handleSubtract}
            > [-] </button>
        </div>
    )
}

export default Counter;