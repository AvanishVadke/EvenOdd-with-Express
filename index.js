const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/check", (req, res) =>{
    let n = parseFloat(req.query.number);
    let r = n % 2 === 0 ? "Even" : "Odd";
    res.json({"msg" : r}); 
});

app.listen(9000, () => { console.log("Server started on port 9000");});