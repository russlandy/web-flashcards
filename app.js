require("@babel/register")
require("dotenv")

const express = require("express");

const app = express();
const serverConfig = require("./config/serverConfig")

const indexRoutes = require("./routers/index.routes")

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.use("/", indexRoutes)


app.listen(PORT, () => {
    console.log(`Server live on ${PORT} port`);
})

