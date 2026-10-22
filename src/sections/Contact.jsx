import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { profile } from "../data/profile";
import { API_URL } from "../config";

const emptyForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await axios.post(`${API_URL}/api/contact`, formData);
      if (res.data.success) {
        setStatus("sent");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container reveal contact-grid">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let's work together</h2>
          <p className="contact-lead">
            I'm open to full-stack and backend opportunities, freelance work and collaborations. Drop a
            message and I'll get back to you.
          </p>
          <ul className="contact-list">
            <li>
              <FaEnvelope />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FaPhone />
              <a href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <FaLinkedin />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/sankarz0206
              </a>
            </li>
            <li>
              <FaGithub />
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                github.com/sankarzhub
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="card contact-form">
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"} <FaPaperPlane />
          </button>
          {status === "sent" && (
            <p className="form-status success" role="status">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="form-status error" role="alert">
              Couldn't send right now. Please email me directly at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
