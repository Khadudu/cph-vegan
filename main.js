const express = require("express");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const errorController = require("./controllers/errorController");
const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const subscibersController = require("./controllers/subscribersController");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/recipe_db", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDb using mongoose");
});

Subscriber.create(
  {
    name: "Joni Wexler",
    email: "jon@wexler.com"
  },
  function(error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
  }
);

Subscriber.find({ name: "jon wexler" }).where("email", /wexler/);

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(layouts);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.get("/", homeController.showHome);
app.get("/courses", homeController.showCourses);
app.get("/contact", subscibersController.getSubscriptionPage);
app.post("/subscribe", subscibersController.saveSubscriber);
app.get(
  "/subscribers",
  subscibersController.getAllSubscribers,
  (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
  }
);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Listening on port ${port}...`);
