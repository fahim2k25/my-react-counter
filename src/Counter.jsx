import { useState } from "react"

export default function Counter() {

    // using useState hook from REACT
    const [count, setCount] = useState(0);

    // adding event handler for the add button
    const handleAdd = () => {
        let newCount = count + 1;
        setCount(newCount);
    }

    // Creating style object
    const counterStyle = {

        border: "2px solid yellow",
        borderRadius: "20px"
    }

    return (
        <div style={counterStyle}>
            <h2>Counter</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd} >Add</button>
        </div>

    )
}