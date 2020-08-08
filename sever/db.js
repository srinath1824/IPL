const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");
const app = express();
const Joi = require('@hapi/joi');
const _ = require("lodash");
const excelToJson = require("convert-excel-to-json");
const fs = require('fs')
require('dotenv').config();
let MongoClient = require("mongodb").MongoClient;
mongoose.pluralize(null);

let url = process.env.MONGODB_URI;
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

const courseSchema = new mongoose.Schema({
  playerName: String,
  score: Number,
  role: String,
  highScore: Number,
  franchise: String
});

global.__basedir = __dirname;

// -> Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

function validate(excelData) {
  // JOI schema
  // validate
  const profileSchema = Joi.object({
    playerName: Joi.string().required(),
    role: Joi.string().required(),
    price: Joi.string().required()
  })

  for(let team in excelData) {
    excelData[team].slice(1).map(data => {
      const { error, value } = profileSchema.validate(data);
      if(!error) {
        // console.log("Success")
      } else {
        console.log('Failure', error.details[0].message)
        return false
      }
    })
  }
  return true
}


// -> Import Excel File to MongoDB database
function importExcelData2MongoDB(filePath, fileName) {
  // -> Read Excel File to Json Data
  console.log('filename',fileName);
  const excelData = excelToJson({
    sourceFile: filePath,
    sheets: [
      {
        name: "RCB",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "MI",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "CSK",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "DC",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "KXIP",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "KKR",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "RR",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
      {
        name: "SRH",
        columnToKey: {
          A: "playerName",
          B: "role",
          C: "price",
        },
      },
    ]
  })

  // console.log('EXCEL DATA', excelData)

  // Insert Json-Object to MongoDB
  let result = validate(excelData)
  console.log('2222222', result)
  if(result) {

    mongoose
  .connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => { 
    console.log("connected to mongoDB...")
    for (let data in excelData) {
      let documents = excelData[data].slice(1);
      const Course = mongoose.model(data, courseSchema);
      Course.insertMany(documents, (err, res) => {
        if (err) {
          console.log("ERRORRRRRRRR", data);
          throw err;
        }
        console.log("Number of documents inserted: ", data, res.length);
        /**
              Number of documents inserted: 5
          */
        // db.close();
      });
    }
  })
  .catch(err => console.log("could not connect to mongoDB..."));
   fs.unlinkSync(filePath);
};
}

// -> Express Upload RestAPIs
app.post("/api/uploadfile", upload.single("uploadfile"), async (req, res) => {
  try {
    await importExcelData2MongoDB(__basedir + "/uploads/" + req.file.filename, req.file.originalname.split('.')[0].replace(/ /g,'').trim(' '));
    res.json({
      msg: "File uploaded/import successfully!",
      //file: req.file,
    });
  } catch {
    res.status(400).send("Error occured while uploading to MongoDB");
  }
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
})
