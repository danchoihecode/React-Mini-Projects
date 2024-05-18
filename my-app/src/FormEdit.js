import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function FormEdit(props) {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const customers = props.customers;
    const setCustomers = props.setCustomers;
    const params = useParams();
    const index = params.index;

    useEffect(() => {
        let c = customers[index];
        setName(c.name);
        setAddress(c.address);
        setPhone(c.phone);
    },[customers,index]);
    function handleSave() {
        let currentCustomers = customers;
        let c = currentCustomers[index];
        c.name = name;
        c.address = address;
        c.phone = phone;
        setCustomers(currentCustomers);
    }
    return (
        <div>
            <div className="form-item">
                <div>Name</div>
                <div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
            </div>
            <div className="form-item">
                <div>Address</div>
                <div>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
            </div><div className="form-item">
                <div>Phone</div>
                <div>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                </div>
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
            </div>


        </div>
    )
}