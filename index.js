const express = require("express");
const app = express();
const db = require("./models");
const bodyParser = require("body-parser");
const port = 3000;
const sensors = require("./modules/sensors/route");

/*Middleware */
app.use(bodyParser.json());

/*Register Route For End Points*/
app.use("/api/sensors", sensors);

/*Error  Handling*/
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

/*Intialize the Sequalize*/
db.sequelize.sync().then((req) => {
  /* app.listen(port, () => {     for local run*/
  app.listen(port, () => {
    console.log(`Backend server is listening at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Error syncing database:', error);
});

/*Export*/
module.exports = app;
