import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import {Button} from  "react-bootstrap"
export default function MessageDialog(props) {
    const { open, setOpen } = props;
    return (
        <Dialog open={open}>
            <DialogTitle>Congratulations !</DialogTitle>
            <DialogContent>
                <div>
                    You have reached the diamond.
                </div>
                <div>
                    <Button variant="success" style={{ margin: "30px 0px 10px 180px", }}
                    onClick={() => setOpen(false)}>OK</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}