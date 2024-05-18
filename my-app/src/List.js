import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useNavigate } from "react-router";
function TableCustomers(customers, onDelete, onEdit) {
    return (
        <>
            {
                customers.map((c, index) => (
                    <TableRow>
                        <TableCell>{c.id}</TableCell>
                        <TableCell>{c.name}</TableCell>
                        <TableCell>{c.address}</TableCell>
                        <TableCell>{c.phone}</TableCell>
                        <button onClick={() => onDelete(index)}>Delete</button>
                        <button onClick={() => onEdit(index)}>Edit</button>
                    </TableRow>
                ))}
        </>

    )
}
export default function List(props) {

    const customers = props.customers;
    const setCustomers = props.setCustomers;
    const navigate = useNavigate();
    function handleDelete(index) {

        let id = customers[index].id;
        let newCustomers = customers.filter((c) => { return c.id !== id });
        setCustomers(newCustomers);
    }
    function handleEdit(index) {

        navigate('/edit/' + index);

    }
    return (
        <div>
            List of customers
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers ? TableCustomers(customers, handleDelete, handleEdit) : ""}
                </TableBody>
            </Table>
        </div>
    )
}