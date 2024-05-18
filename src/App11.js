import { useState } from "react"
import RegisterPopupDialog from "./PopupDialog"
export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    const handleRegister = (username, password) => {
        alert("register, username = " + username + " password = " + password);
    };
    return (
        <div>
            <button onClick={() => { setIsOpen(true) }}>Open Dialog</button>
            <RegisterPopupDialog
                onRegister={handleRegister}
                open={isOpen}
                setOpen={setIsOpen}
            ></RegisterPopupDialog>
        </div>
    )
}