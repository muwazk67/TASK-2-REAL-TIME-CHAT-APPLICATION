💬 Real-Time Chat Application

CODTECH Internship – Task 2

📌 Project Overview

This project is a Real-Time Chat Application built using React.js for the frontend and WebSockets for real-time communication. The application allows users to send and receive messages instantly and maintains message history during the session.

This project fulfills the CODTECH Internship Task-2 requirements.

🎯 Project Objectives

Implement real-time communication using WebSockets

Build a responsive chat interface using React.js

Display message history in the chat window

Ensure smooth and instant message delivery

🛠️ Technologies Used
Frontend

React.js

CSS (Responsive UI)

WebSocket API

Backend

Node.js

WebSocket (ws library)

📂 Project Structure
real-time-chat/
│
├── server/
│   └── server.js        # WebSocket server
│
├── client/
│   ├── src/
│   │   ├── App.js       # Main React component
│   │   ├── App.css      # Styling
│   │   └── index.js
│   └── package.json
│
└── README.md

✨ Features

Real-time messaging

WebSocket-based communication

Message history display

Responsive chat interface

Simple and clean UI

▶️ How to Run the Project
🔹 Step 1: Start WebSocket Server
cd server
npm install ws
node server.js


Server runs on:

ws://localhost:8080

🔹 Step 2: Start React Frontend
cd client
npm install
npm start


Frontend runs on:

http://localhost:3000

🧪 Application Workflow

User opens the chat interface

WebSocket connection is established

Previous messages (history) are loaded

User sends a message

Message is instantly broadcast to all connected users

🚀 Future Enhancements

User authentication (username support)

Persistent message storage using database

Typing indicators

Emoji and media sharing

Private chat rooms

🏆 Internship Note

A Completion Certificate will be issued by CODTECH on the internship end date, subject to successful project evaluation.

👨‍💻 Developed By

Your Name
Intern – CODTECH

