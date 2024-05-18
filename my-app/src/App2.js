import { useState } from "react";
import PopupDialog from "./PopupDialog"
import { Button } from 'react-bootstrap';
import "./App2.css";

export default function App() {

  const [row, setRow] = useState(2);
  const [col, setCol] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  const gridTemplateColumns = `repeat(${col}, auto)`;
  const gridContainerWidth = `${col * 202}px`;

  const handleSubmit = (row, col) => {
    setRow(row);
    setCol(col);
  };

  return (
    <div>
      <div>
        <Button className="btn"
          variant="success" onClick={() => { setIsOpen(true) }}>Thay đổi kích thước grid</Button>
        <PopupDialog
          onSubmit={handleSubmit}
          open={isOpen}
          setOpen={setIsOpen}
        ></PopupDialog>
      </div>
      <div className="grid-container" style={{ gridTemplateColumns, width: gridContainerWidth }}>
        {
          Array.from({ length: col > 0 && row > 0 ? col * row : 0 }).map((_, index) => (
            <div key={index} className="grid-item">
              <img src={`hoa-${index + 1}.jpg`} alt="Không có sẵn ảnh" />
            </div>
          ))}
      </div>
    </div>
  );
}
