import { useState, useEffect } from "react";
import "./displaymessages.css"; // Custom CSS for styling

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/messages")
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
        setUnreadCount(data.filter((msg) => !msg.isRead).length);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleRead = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/message/${id}`, {
        method: "PUT",
      });
      console.log(response); // to check
      // const data = await response.json();
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg._id === id ? { ...msg, isRead: !msg.isRead } : msg
        )
      );
      setUnreadCount(messages.filter((msg) => !msg.isRead).length);
    } catch (error) {
      console.log("Error toggling read status", error);
    }
  };

  return (
    <div className="container message-display">
      <h2 className="text-center mb-4 UserMeg-heading">Messages</h2>

      {/* Unread Messages Button */}
      <div className="unread-messages-btn">
        <button className="btn btn-info">
          Unread Messages:{" "}
          <span className="badge badge-light">{unreadCount}</span>
        </button>
      </div>

      {/* Messages Table */}
      <table className="table table-bordered table-hover mt-4">
        {" "}
        {/* Added table-bordered */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th> {/* Added Date column */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr
              key={message._id}
              className={message.isRead ? "table-secondary" : "table-warning"}
            >
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.text}</td>
              <td>
                {new Date(message.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>

              {/* <td>{new Date(message.createdAt).toLocaleDateString()}</td>  */}
              <td>
                <button
                  className={`btn btn-sm ${
                    message.isRead ? "btn-success" : "btn-danger"
                  } animated-btn`}
                  onClick={() => toggleRead(message._id)}
                >
                  {message.isRead ? "Unread" : "Read"} {/* Shortened text */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
