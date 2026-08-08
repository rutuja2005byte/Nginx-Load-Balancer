const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const SERVER_NAME = process.env.SERVER_NAME || "Backend";

app.get("/", (req, res) => {
    res.json({
        message: "Hello from backend",
        server: SERVER_NAME,
        port: PORT
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        server: SERVER_NAME
    });
});

app.listen(PORT, () => {
    console.log(`${SERVER_NAME} running on port ${PORT}`);
});