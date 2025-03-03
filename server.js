const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// STEP 2: GET API - returns query and path parameters
app.get("/api/data/:pathParam", (req, res) => {
    const pathParam = req.params.pathParam; // Path parameter
    const queryParam = req.query.query; // Query parameter

    res.json({
        message: "GET request received",
        pathParam,
        queryParam
    });
});

// STEP 3: POST API - accepts JSON data and returns an array
app.post("/api/data", (req, res) => {
    const requestData = req.body;

    // Returning an array with received data
    res.json({
        message: "POST request received",
        data: Array.isArray(requestData) ? requestData : [requestData]
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
