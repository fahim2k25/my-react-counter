export default function Counter() {

    const counterStyle = {

        border: "2px solid yellow",
        borderRadius: "20px"
    }

    return (
        <div style={counterStyle}>
            <h2>Counter</h2>
            <h3>Count: </h3>
            <button>Add</button>
        </div>

    )
}