const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json()); // 🔥 THIS IS REQUIRED

let issues = [
    { id: 1, title: "Login bug", status: "open" }
];

app.get("/issues", (req, res) => {
    res.json(issues);
});

app.post("/issues", (req, res) => {
    const newIssue = {
        id: issues.length + 1,
        title: req.body.title,
        status: "open"
    };

    issues.push(newIssue);
    res.json(newIssue);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});