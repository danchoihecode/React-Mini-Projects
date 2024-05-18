import { useEffect, useState } from "react"
import "./App.css"
export default function FormAdd(props) {
    const [sid, setSid] = useState("");
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");

    const students = props.students;
    const setStudents = props.setStudents;
    const maxID = props.maxID;
    const setMaxID = props.setMaxID;

    useEffect(() => {
        setSid("");
        setName("");
        setBirthday("");
        setEmail("");
    }, [students]);

    function getMaxID() {
        let id = maxID + 1;
        setMaxID(id);
        return id;
    }

    function handleAdd() {

        let newStudents = [...students, {
            id: getMaxID(),
            sid: sid,
            name: name,
            birthday: birthday,
            email: email
        }]
        setStudents(newStudents);
    }
    return (
        <div className="form">
            <input className="form-item" type="text" value={sid} placeholder="MSSV" onChange={(e) => setSid(e.target.value)}></input>
            <input className="form-item" type="text" value={name} placeholder="Họ và tên" onChange={(e) => setName(e.target.value)}></input>
            <input className="form-item" type="text" value={birthday} placeholder="Ngày sinh" onChange={(e) => setBirthday(e.target.value)}></input>
            <input className="form-item" type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>

            <button className="form-item button" onClick={handleAdd}>Thêm</button>
        </div>
    )
}