import { useState } from "react";
import "./App.css"
import FormAdd from "./App1.1";
import List from "./App1.2";
export default function App() {

    const [students, setStudents] = useState([]);
    const [maxID, setMaxID] = useState(0);
    return (
        <div className="container">
            <div className="form-div">
            <FormAdd
            students={students}
            setStudents={setStudents}
            maxID={maxID}
            setMaxID={setMaxID}
           />
            </div>
            <div className="item">
            <List 
            students={students} 
            setStudents={setStudents} 
            />
            </div>
           
            
        </div>
    )

};
