export default function Com() {   
    function handleClick() {
        const counter = localStorage.getItem("counter");
        console.log("Counter = ", counter);
    }
    return (
        <div>
            <button onClick={handleClick}>View</button>
        </div>
    )
}