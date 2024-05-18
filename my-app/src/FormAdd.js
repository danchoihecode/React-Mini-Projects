import { useState } from "react"
import "./App.css"
export default function FormAdd(props) {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const customers = props.customers;
    const setCustomers = props.setCustomers;
    const maxID = props.maxID;
    const setMaxID = props.setMaxID;

    function getMaxID() {
        let id = maxID + 1;
        setMaxID(id);
        return id;
    }

    function handleAdd() {

        let newCustomers = [...customers, {
            id: getMaxID(),
            name: name,
            address: address,
            phone: phone
        }]
        setCustomers(newCustomers);
    }
    return (
        <div>
            <div className="form-item">
                <div>Name</div>
                <div>
                    <input type="text" onChange={(e) => setName(e.target.value)}></input>
                </div>
            </div>
            <div className="form-item">
                <div>Address</div>
                <div>
                    <input type="text" onChange={(e) => setAddress(e.target.value)}></input>
                </div>
            </div><div className="form-item">
                <div>Phone</div>
                <div>
                    <input type="text" onChange={(e) => setPhone(e.target.value)}></input>
                </div>
            </div>
            <div>
                <button onClick={handleAdd}>Add</button>
            </div>


        </div>
    )
}