// // LoginPrompt.js
// import React from "react";
// import { Link } from "react-router-dom";

// function LoginPrompt() {
//   return (
//     <div className="login-prompt">
//       <p>Please sign in to access this tool.</p>
//       <Link to="/Signin">
//         <button className="login-btn">Sign In</button>
//       </Link>
//     </div>
//   );
// }

// export default LoginPrompt;

// LoginPrompt.js

// import React from "react";
// import { Link } from "react-router-dom";

// function LoginPrompt() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
//         <Link to="/Signin">
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
//             Sign In
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default LoginPrompt;

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function LoginPrompt2() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
      <div className="bg-white shadow-lg rounded p-4 text-center">
        <Link to="/Signin">
          <Button
            variant="primary"
            size="lg"
            className="font-weight-bold"
            style={{ width: "150px" }}
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPrompt2;
