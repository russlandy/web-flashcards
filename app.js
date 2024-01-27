<<<<<<< HEAD
<<<<<<< HEAD
const 
=======
require('@babel/register');
require('dotenv');
=======
require("@babel/register")
require("dotenv")
>>>>>>> 78e14a5f13bd01576d1d42cd0dfa9b17ae956ed7

const express = require("express");

const app = express();
const serverConfig = require("./config/serverConfig")

const indexRoutes = require("./routers/index.routes")

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.use("/", indexRoutes)


app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server live on ${PORT} port`);
});
>>>>>>> 4429dbe876cd9e73d79b057e676bca1e469a6269
=======
    console.log(`Server live on ${PORT} port`);
})
>>>>>>> 78e14a5f13bd01576d1d42cd0dfa9b17ae956ed7
