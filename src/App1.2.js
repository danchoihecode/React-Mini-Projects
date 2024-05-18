import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
function TableStudents(students, onDelete) {
    return (
        <>
            {
                students.map((c, index) => (
                    <TableRow>
                        <TableCell>{c.id}</TableCell>
                        <TableCell>{c.sid}</TableCell>
                        <TableCell>{c.name}</TableCell>
                        <TableCell>{c.birthday}</TableCell>
                        <TableCell>{c.email}</TableCell>
                        <TableCell>
                            <button className="button delete-button"onClick={() => onDelete(index)}>Xóa</button>
                        </TableCell>
                        
                    </TableRow>
                ))}
        </>

    )
}
export default function List(props) {

    const students = props.students;
    const setStudents = props.setStudents;
    function handleDelete(index) {

        let id = students[index].id;
        let newStudents = students.filter((c) => { return c.id !== id });
        setStudents(newStudents);
    }
   
    return (
        <>
            <Table >
                <TableHead >
                    <TableRow className="header">
                        <TableCell>STT</TableCell>
                        <TableCell>MSSV</TableCell>
                        <TableCell>Họ tên</TableCell>
                        <TableCell>Ngày sinh</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell style={{width:"10%", margin:"auto"}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students ? TableStudents(students, handleDelete) : ""}
                </TableBody>
            </Table>
        </>
    )
}