const app = require("./modules/app/app");
const { PORT } = require("./modules/app/config");

app.listen(PORT, () => {
  console.log(`[petful-api] Listening on ${PORT}.`);
});
