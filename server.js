const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();

const dbConfig = require("./db");
const listingsRoute = require('./routes/listingsRoute')
const usersRoute = require('./routes/usersRoute')

app
  .use(
    cors({
      credentials: true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
  )

app.use(bodyParser.json())
app.use('/api/listings', listingsRoute)
app.use('/api/users', usersRoute)


const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("welcome to proplister")
});

app.listen(port, () => 
    console.log(`Server running on port ${port}`)
);