// import { useEffect, useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [image, setImage] = useState(""); // Initialize as null
//   // we use allUsers for testing to show all list now we commit that code cuz not need and allUsers still remaining
//   const [allUsers, setAllUsers] = useState([]);

//   function convertToBase64(e) {
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]); // Use e.target.files[0]
//     reader.onload = () => {
//       const base64String = reader.result;
//       console.log("Base64 string:", base64String);
//       setImage(reader.result);
//     };
//     reader.onerror = (error) => {
//       console.log("Error: ", error);
//     };
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3001/register", {
//         name,
//         email,
//         password,
//         image, // Include image in the request
//       })
//       .then((result) => {
//         console.log(result);
//         Navigate("/Signin"); // Change to Navigate("/Signin")
//       })
//       .catch((err) => console.log(err));
//   };

//   function getUsers() {
//     fetch("http://localhost:3001/get-images", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setAllUsers(data.data);
//       });
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Name"
//               autoComplete="off"
//               name="name"
//               className="form-control rounded-0"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               autoComplete="off"
//               name="password"
//               className="form-control rounded-0"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="picture">
//               <strong>Upload Picture</strong>
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               className="form-control rounded-0"
//               onChange={convertToBase64}
//             />
//             {image && <img src={image} alt="Uploaded" width={50} height={50} />}
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Register
//           </button>
//         </form>
//         <p>Already Have an Account</p>
//         <Link
//           to="/Signin"
//           className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//         >
//           Login
//         </Link>
//       </div>

//       {/* Displaying all users' names and images */}
//       {/* <div>
//         <h3>All Users</h3>
//         <ul>
//           {allUsers.map((user) => (
//             <li key={user.id}>
//               <p>{user.name}</p>
//               <img
//                 src={user.imageUrl}
//                 alt={user.name}
//                 width={100}
//                 height={100}
//               />
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// }

// export default Signup;

// GPT 1

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null); // Initialize as null

  // State variables for validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [imageError, setImageError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    let isValid = true;

    // Validate Name
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Name must contain only alphabets.");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate Password
    if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/.test(
        password
      )
    ) {
      setPasswordError(
        "Password must be at least 8 characters and include alphabets, numbers, and symbols."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate Image
    if (image && image.size > 70000) {
      setImageError("Image size should be less than 70 KB.");
      isValid = false;
    } else {
      setImageError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:3001/register", {
          name,
          email,
          password,
          image: image ? image : null, // Include image in the request if it exists
        })
        .then((result) => {
          console.log(result);
          alert("Registration successful!"); // Show alert on successful registration
          Navigate("/Signin"); // Change to Navigate("/Signin") if needed
        })
        .catch((err) => console.log(err));
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      if (selectedImage.size > 70000) {
        setImageError("Image size should be less than 70 KB.");
      } else {
        setImageError("");
        const reader = new FileReader();
        reader.readAsDataURL(selectedImage);
        reader.onload = () => {
          setImage(reader.result);
        };
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <div className="text-danger">{nameError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            {passwordError && (
              <div className="text-danger">{passwordError}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="picture">
              <strong>Upload Picture</strong>
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control rounded-0"
              onChange={handleImageChange}
            />
            {image && <img src={image} alt="Uploaded" width={50} height={50} />}
            {imageError && <div className="text-danger">{imageError}</div>}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/Signin"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
