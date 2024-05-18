import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import Form from "./Form"
export default function PopupDialog(props) {
    const { open, onSubmit, setOpen } = props;
    return (
        <Dialog open={open}>
            <DialogTitle>Nhập kích thước grid</DialogTitle>
            <DialogContent>
                <Form onSubmit={onSubmit} setOpen={setOpen}></Form>
            </DialogContent>
        </Dialog>
    )
}