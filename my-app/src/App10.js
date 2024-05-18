import { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css"
import FormAdd from "./FormAdd";
import List from "./List";
import FormEdit from "./FormEdit";
export default function App() {

  const [customers, setCustomers] = useState([]);
  const [maxID, setMaxID] = useState(0);
  return (
    <div className="container">
      <Router>
        <ul>
          <li>
            <Link to="/list">List of customers</Link>
          </li>
          <li>
            <Link to="/add">Add a customer</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/list" element={<List
            customers={customers}
            setCustomers={setCustomers}
          />} />
          <Route path="/add" element={<FormAdd
            customers={customers}
            setCustomers={setCustomers}
            maxID={maxID}
            setMaxID={setMaxID}
          />} />
          <Route path="/edit/:index" element={<FormEdit
            customers={customers}
            setCustomers={setCustomers}
          />} />
        </Routes>
      </Router>
    </div>
  )

};
