import { Button } from 'react-bootstrap';
import "./App3.css";
import { useEffect, useState } from 'react';
import MessageDialog from "./MessageDialog"

export default function App() {

    const [marioPosition, setMarioPosition] = useState(45);
    const [direction, setDirection] = useState([]);
    const [index, setIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isRunning) {
            const timer = setTimeout(() => {
                if (index < direction.length) {
                    move(direction[index]);
                    setIndex((index) => index + 1);
                }
            }, 500);

            return () => clearTimeout(timer);

        } // eslint-disable-next-line
    }, [index, direction,isRunning]);

    const move = (dir) => {
        let newPosition;

        if (dir === 1 && marioPosition > 5) {
            newPosition = marioPosition - 6;
        } else if (dir === 2 && marioPosition < 42) {
            newPosition = marioPosition + 6;
        } else if (dir === 3 && marioPosition % 6 !== 0) {
            newPosition = marioPosition - 1;
        } else if (dir === 4 && marioPosition % 6 !== 5) {
            newPosition = marioPosition + 1;
        }

        if (!((9 <= newPosition && newPosition <= 11) || (18 <= newPosition && newPosition <= 21) || (32 <= newPosition && newPosition <= 35))) {
            setMarioPosition(newPosition);

            if (newPosition === 4) {
                setIsOpen(true);
            }
        }
    };

    const run = () => {
        if (direction.length > 0) {
            setIsRunning(true);
        }
    }

    return (
        <div className="game">
            <div>
                <MessageDialog
                    open={isOpen}
                    setOpen={setIsOpen}
                ></MessageDialog>
            </div>
            <div className="grid-container">
                {
                    Array.from({ length: 48 }).map((_, index) => {
                        if (index === marioPosition) return (
                            <div key={index} className="grid-item">
                                <img src={`mario.jpg`} alt="Không có sẵn ảnh" />
                            </div>
                        );
                        else if (index === 4) return (
                            <div key={index} className="grid-item">
                                <img src={`diamond.png`} alt="Không có sẵn ảnh" />
                            </div>
                        )
                        else if ((9 <= index && index <= 11) || (18 <= index && index <= 21) || (32 <= index && index <= 35))
                            return (
                                <div key={index} className="grid-item wall"></div>
                            )
                        else return (
                            <div key={index} className="grid-item path"></div>
                        )
                    }

                    )
                }
            </div>
            <div className="button-container">
                <Button className='button' variant="basic" onClick={() => {
                    const newDirection = [...direction, 1];
                    setDirection(newDirection);
                }} >Move Up</Button>
                <Button className='button' variant="basic" onClick={() => {
                    const newDirection = [...direction, 2];
                    setDirection(newDirection);
                }}>Move Down</Button>
                <Button className='button' variant="basic" onClick={() => {
                    const newDirection = [...direction, 3];
                    setDirection(newDirection);
                }}>Move Left</Button>
                <Button className='button' variant="basic" onClick={() => {
                    const newDirection = [...direction, 4];
                    setDirection(newDirection);
                }}>Move Right</Button>
                <Button className='run-button' variant="success" onClick={run}>Run</Button>
            </div>
        </div>
    );
}