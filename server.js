const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

let messages = [];

wss.on("connection", (ws) => {
    // Send message history
    ws.send(JSON.stringify({ type: "history", data: messages }));

    ws.on("message", (message) => {
        messages.push(message.toString());

        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: "message", data: message.toString() }));
            }
        });
    });
});

console.log("WebSocket server running on ws://localhost:8080");
