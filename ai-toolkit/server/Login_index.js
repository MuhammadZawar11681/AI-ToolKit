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
const Replicate = require("replicate");
const EmployeeModel = require("./models/AIToolkitModel");

const app = express();
app.use(express.json());

let corsOptions = {
  origin: ['http://localhost:3000'],
}

app.use(cors(corsOptions));

// Sometimes localhost may not work, so using 127.0.0.1
// mongoose.connect("mongodb://127.0.0.1:27017/AI_ToolKit", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

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


app.post("/api/video-gen", async (req, res) => {
  try {

    const { prompt, token } = req.body
    const replicate = new Replicate({
      auth: token
    })
    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt
        }
      }
    );
    res.json(output)
  }
  catch (error) {
    console.log(error)
    res.json(error)
  }
});


const PORT = 3001; // Define the port to listen on

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Hello world");
});
