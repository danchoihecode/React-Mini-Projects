import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0);
    function handleClick() {
        setCounter(counter + 1);
        localStorage.setItem("counter", counter);
    }
    return (
        <div>
            Counter : {counter}
            <button onClick={handleClick}>
                Inc
            </button>
        </div>
    )
}