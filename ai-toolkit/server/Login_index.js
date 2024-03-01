// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());
// // some time the local host is not working so put //127.0.0.1
// mongoose.connect("mongodb://127.0.0.1:27017/AI_ToolKit");

// app.prependOnceListener(3001, () => {
//   console.log("Server is running");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/AIToolkitModel");

const app = express();
app.use(express.json());
app.use(cors());

// Sometimes localhost may not work, so using 127.0.0.1
mongoose.connect("mongodb://127.0.0.1:27017/AI_ToolKit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/Signin", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

const PORT = 3001; // Define the port to listen on

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Hello world");
});
