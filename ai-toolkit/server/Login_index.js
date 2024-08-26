const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Replicate = require("replicate");
const EmployeeModel = require("./models/AIToolkitModel");

const app = express();
app.use(express.json());

let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
mongoose.connect("mongodb://127.0.0.1:27017/AI_ToolKit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
app.get("/user/:email", (req, res) => {
  const { email } = req.params;
  // Query the database to find the user by email
  EmployeeModel.findOne({ email })
    .then((user) => {
      if (user) {
        // User found, return name and imageUrl
        res.json({ name: user.name, imageUrl: user.image });
      } else {
        // User not found
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.get("/get-images", async (req, res) => {
  try {
    const employees = await EmployeeModel.find({});
    const images = employees.map((employee) => ({
      id: employee._id,
      name: employee.name, // Assuming 'name' is the field storing employee's name
      email: employee.email, // Assuming 'email' is the field storing employee's email
      imageUrl: employee.image, // Assuming imageUrl is the field storing image URLs
    }));
    res.json({ status: "ok", data: images });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.post("/api/video-gen", async (req, res) => {
  try {
    const { prompt, token } = req.body;
    const replicate = new Replicate({
      auth: token,
    });
    const output = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
        },
      }
    );
    res.json(output);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// Fetch all users
app.get("/admin/users", async (req, res) => {
  try {
    const users = await EmployeeModel.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user
app.put("/admin/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await EmployeeModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user
app.delete("/admin/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await EmployeeModel.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// User Status Show.

app.get("/admin/metrics", async (req, res) => {
  try {
    const totalUsers = await EmployeeModel.countDocuments({});
    const activeUsers = await EmployeeModel.countDocuments({
      lastLogin: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }, // Users logged in within the last 30 days
    });
    const pendingRequests = await EmployeeModel.countDocuments({
      isActive: false,
    });

    res.json({ totalUsers, activeUsers, pendingRequests });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3001; // Define the port to listen on

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Hello world");
});
