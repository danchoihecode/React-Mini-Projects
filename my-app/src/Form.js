import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export default function Form({ onSubmit, setOpen }) {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    return (
        <>
            <div>
                <TextField label="Số hàng" name="row" style = {{marginRight:"20px",}}
                value={inputs.row || ""}
                    onChange={handleChange} ></TextField>
                <TextField label="Số cột" name="col" value={inputs.col || ""}
                    onChange={handleChange}></TextField>
            </div>
            <div>
                <Button variant="contained" color="secondary" style = {{margin:"30px 20px 10px 0px",}}
                onClick={() => {
                    onSubmit(inputs.row, inputs.col);
                    setOpen(false);
                }}>OK</Button>
                <Button variant="outlined" color="secondary" style = {{margin:"30px 20px 10px 0px",}}
                onClick={() => setOpen(false)}>Bỏ qua</Button>
            </div>
        </>
    )
}