const mongoose = require("mongoose");
const express = require("express");
const app = express();
const _ = require("lodash");
mongoose.pluralize(null);
// mongodb+srv://username:Password123@cluster0-dwm8f.mongodb.net/iplteam?retryWrites=true&w=majority
// "mongodb+srv://surya:surya@cluster0-wn0n5.mongodb.net/iplteams?retryWrites=true&w=majority"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose
  .connect(
    "mongodb+srv://surya:surya@cluster0-wn0n5.mongodb.net/iplteams?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("connected to mongoDB..."))
  .catch(err => console.log("could not connect to mongoDB..."));

const courseSchema = new mongoose.Schema({
  playerName: String,
  score: Number,
  role: String,
  highScore: Number,
  franchise: String
});

app.get("/api/getdata/:team", (req, res) => {
  console.log("TEAM", req.params.team);
  const Course = mongoose.model(req.params.team, courseSchema);
  Course.find({}, function(err, data) {
    if (err) {
      res.send("111111111");
    } else {
      res.send(data);
    }
  });
});

app.post("/api/savedata", (req, res) => {
  const Course = mongoose.model(req.body.franchise, courseSchema);
  let course = new Course(
    _.pick(req.body, ["playerName", "score", "role", "highScore", "franchise"])
  );
  course.save(function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({ data: "Record has been Inserted..!!" });
    }
  });
});

app.listen(5000, () => {
  console.log("SERVER is listining to 5000");
});
