import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminMessages.css";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/messages", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("adminToken"),
        },
      });
      setMessages(res.data.messages);
    } catch (err) {
      alert("Failed to load messages. Please login again.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/admin/messages/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("adminToken"),
        },
      });
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (err) {
      alert("Failed to delete message.");
    }
  };

  return (
    <div className="admin-messages">
      <h2>📨 Contact Messages</h2>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td data-label="Name">{msg.name}</td>
                <td data-label="Email">{msg.email}</td>
                <td data-label="Message">{msg.message}</td>
                <td data-label="Date">{new Date(msg.created_at).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleDelete(msg.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminMessages;
