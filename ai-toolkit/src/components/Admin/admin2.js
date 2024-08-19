

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Button, Modal, Form } from "react-bootstrap";
// import "./admin.css";

// const Admin2 = () => {
//   const [users, setUsers] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/admin/users");
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         await axios.delete(`http://localhost:3001/admin/users/${id}`);
//         fetchUsers(); // Refresh the list after deletion
//       } catch (error) {
//         console.error("Error deleting user:", error);
//       }
//     }
//   };

//   const handleUpdate = (user) => {
//     setSelectedUser(user);
//     setShowUpdateModal(true);
//   };

//   const handleUpdateSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:3001/admin/users/${selectedUser._id}`, {
//         name: selectedUser.name,
//         email: selectedUser.email,
//       });
//       fetchUsers(); // Refresh the list after update
//       setShowUpdateModal(false);
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//   };

//   return (
//     <div className="Admin mt-4">
//       <Form.Control
//         type="text"
//         placeholder="Search by name or email"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="mb-3"
//       />
//       <Table bordered hover responsive>
//         <thead className="bg-primary text-white">
//           <tr>
//             <th>Picture</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user) => (
//             <tr key={user._id}>
//               <td>
//                 <img
//                   src={user.image || "default-image-url.png"} // Use a default image URL if no image is available
//                   alt={`${user.name}'s profile`}
//                   width="50"
//                   height="50"
//                   style={{ borderRadius: "50%" }}
//                 />
//               </td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.password}</td> {/* Display Password */}
//               <td>
//                 <Button
//                   variant="warning"
//                   size="sm"
//                   onClick={() => handleUpdate(user)}
//                   className="mr-2"
//                 >
//                   Update
//                 </Button>
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   onClick={() => handleDelete(user._id)}
//                 >
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Update Modal */}
//       <Modal
//         show={showUpdateModal}
//         onHide={() => setShowUpdateModal(false)}
//         backdrop="static"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Update User</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formName">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={selectedUser?.name || ""}
//                 onChange={(e) =>
//                   setSelectedUser({
//                     ...selectedUser,
//                     name: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//             <Form.Group controlId="formEmail" className="mt-2">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={selectedUser?.email || ""}
//                 onChange={(e) =>
//                   setSelectedUser({
//                     ...selectedUser,
//                     email: e.target.value,
//                   })
//                 }
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleUpdateSubmit}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Admin2;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Admin2 = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:3001/admin/users/${id}`);
        fetchUsers(); // Refresh the list after deletion
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      const updatedUser = {
        name: selectedUser.name,
        email: selectedUser.email,
        password: selectedUser.password,
        image: selectedUser.image,
      };

      await axios.put(`http://localhost:3001/admin/users/${selectedUser._id}`, updatedUser);
      fetchUsers(); // Refresh the list after update
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="Admin mt-4">
      <Form.Control
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleSearch}
        className="mb-3"
      />
      <Table bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>
                <img
                  src={user.image || "default-image-url.png"} // Use a default image URL if no image is available
                  alt={`${user.name}'s profile`}
                  width="50"
                  height="50"
                  style={{ borderRadius: "50%" }}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td> {/* Display Password */}
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  onClick={() => handleUpdate(user)}
                  className="mr-2"
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Update Modal */}
      <Modal
        show={showUpdateModal}
        onHide={() => setShowUpdateModal(false)}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser.name}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    name: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mt-2">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={selectedUser.password}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    password: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formImage" className="mt-2">
              <Form.Label>Profile Picture URL</Form.Label>
              <Form.Control
                type="text"
                value={selectedUser.image}
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser,
                    image: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin2;
