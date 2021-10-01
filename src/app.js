const express = require("express");
require("../src/db/conn");
const Olympicsrouter = require("../src/routers/men");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(Olympicsrouter); 

app.listen(port, () =>{
    console.log(`connection is port no ${port}`);
})