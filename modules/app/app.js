const express = require("express");
const cors = require("cors");
const peopleRouter = require("../people/people.router");
const petRouter = require("../pets/pets.router");
const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use("/people", peopleRouter);
app.use("/pets", petRouter);

app.use((error, req, res, next) => {
  let response;
  if (process.env.NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    response = { error };
  }
  res.status(500).json(response);
});

module.exports = app;
