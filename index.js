const client = require('./config/connection')
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require("cors");
const routes = require("./routes/routes");


app.use(bodyParser.json());
const PORT=3900;

app.listen(PORT, ()=>{
    console.log(`Server is now listening at port 3900 to listen click on to view https://localhost:${PORT}`);
})

client.connect();


//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));



app.use("/", routes);
