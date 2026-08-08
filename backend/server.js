const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(
        `${new Date().toISOString()} ${req.method} ${req.url}`
    );
    next();
});

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

app.get("/api/status", (req, res) => {
    res.json({
        server: SERVER_NAME,
        status: "running"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`${SERVER_NAME} running on port ${PORT}`);
});