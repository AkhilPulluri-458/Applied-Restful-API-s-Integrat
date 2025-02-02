const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send(`It's me Akhil\nWelcome to the course!`);
});
app.post('/', (req, res) => {
    res.json({
        message: "POST request received!",
        data: req.body
    });
});
app.patch('/', (req, res) => {
    res.json({
        message: "PATCH request received!",
        data: req.body
    });
});
app.delete('/', (req, res) => {
    res.json({
        message: "DELETE request received!",
        data: req.body
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});