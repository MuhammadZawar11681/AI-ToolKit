import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin2 = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    try {
      await axios.delete(`http://localhost:3001/admin/users/${id}`);
      fetchUsers(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedName = prompt("Enter new name:");
    if (updatedName) {
      try {
        await axios.put(`http://localhost:3001/admin/users/${id}`, {
          name: updatedName,
        });
        fetchUsers(); // Refresh the list after update
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  };

  return (
    <div className="Admin" style={{ backgroundColor: "black" }}>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table border="1">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th> {/* Add Password Header */}
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
                <button onClick={() => handleUpdate(user._id)}>Update</button>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin2;
