import { Button, Checkbox, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";


const data = [
    { id: "1", name: "username1" },
    { id: "2", name: "username2" },
    { id: "3", name: "username3" }
];

export default function App() {
    const [checkAll, setCheckAll] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let tmp = data.map((d) => {
            return { ...d, checked: false }
        })
        setUsers(tmp);
    }, [])

    function handleCheckAll(e) {
        if (checkAll) {
            let tmp = data.map((d) => {
                return { ...d, checked: false }
            })
            setUsers(tmp);
        } else {
            let tmp = data.map((d) => {
                return { ...d, checked: true }
            })
            setUsers(tmp);
        }
        setCheckAll(!checkAll);
    }

    function handleChange(e) {
        const { id, checked } = e.target;
        let tmp = users.map((u) => {
            return u.id === id ? { ...u, checked: checked } : u;
        })
        setUsers(tmp);

        let cnt = 0;
        for (let i = 0; i < tmp.length; i++) {
            if (tmp[i].checked === true) cnt++;
        }
        if (cnt === tmp.length) setCheckAll(true);
        else setCheckAll(false);

    }

    function handleProcess(){
        console.log("process ",users);
    }

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Checkbox checked={checkAll} onChange={handleCheckAll}></Checkbox>
                            <label>Check all</label>
                        </TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((u) =>
                            <TableRow key={u.id}>
                                <TableCell>
                                    <Checkbox id={u.id} checked={u.checked}
                                        onChange={handleChange}></Checkbox>
                                </TableCell>
                                <TableCell>{u.id}</TableCell>
                                <TableCell>{u.name}</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
            <Button variant="contained" color="secondary" onClick={handleProcess}>Process</Button>
        </>
    )
}