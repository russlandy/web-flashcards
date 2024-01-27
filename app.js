<<<<<<< HEAD
const 
=======
require('@babel/register');
require('dotenv');

const express = require('express');

const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

serverConfig(app);

app.listen(PORT, () => {
  console.log(`Server live on ${PORT} port`);
});
>>>>>>> 4429dbe876cd9e73d79b057e676bca1e469a6269
