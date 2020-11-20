require("dotenv").config();
const express = require("express");
const controllers = require("./controllers");
const app = express();

app.use(require("./middleware/headers"));

app.use(express.json());

app.use(require("body-parser").json());

app.use("/nasa", controllers.nasaController);
app.use("/openweather", controllers.openWeatherController);
app.use("/zomato", controllers.zomatoController);

app.listen(process.env.PORT, () => console.log("Server running at http://localhost:"+process.env.PORT));
