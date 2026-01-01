import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onmessage = (event) => {
            const msg = JSON.parse(event.data);

            if (msg.type === "history") {
                setMessages(msg.data);
            } else {
                setMessages(prev => [...prev, msg.data]);
            }
        };

        setSocket(ws);
    }, []);

    const sendMessage = () => {
        if (input.trim() !== "") {
            socket.send(input);
            setInput("");
        }
    };

    return (
        <div className="chat-container">
            <h2>Real-Time Chat</h2>

            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className="message">{msg}</div>
                ))}
            </div>

            <div className="input-box">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default App;
