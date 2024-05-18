import { useState } from "react"
import {CounterContext}  from "./CounterContext"
import Counter13 from "./Counter13"
export default function App() {
    const [counter, setCounter] = useState(0);
    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            <div>
                Counter : {counter}
            </div>
            <Counter13 />
        </CounterContext.Provider>
    )
}