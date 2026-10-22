import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaRegCopy, FaCheck } from "react-icons/fa";
import { profile } from "../data/profile";
import { API_URL, FORMSPREE_ID } from "../config";

const emptyForm = { name: "", email: "", message: "" };

// Deliver via Formspree or the backend when configured; returns false if neither is set up.
const deliver = async (data) => {
  if (FORMSPREE_ID) {
    const res = await axios.post(`https://formspree.io/f/${FORMSPREE_ID}`, data, {
      headers: { Accept: "application/json" },
    });
    return res.status === 200;
  }
  if (API_URL) {
    const res = await axios.post(`${API_URL}/api/contact`, data);
    if (!res.data.success) throw new Error("Backend rejected the message");
    return true;
  }
  return false;
};

const openMailClient = ({ name, email, message }) => {
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
};

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | mailto | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (await deliver(formData)) {
        setStatus("sent");
        setFormData(emptyForm);
      } else {
        openMailClient(formData);
        setStatus("mailto");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard blocked; the address is still visible to copy by hand
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
              <button className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
                {copied ? <FaCheck /> : <FaRegCopy />}
                {copied ? "Copied" : "Copy"}
              </button>
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
          {status === "mailto" && (
            <p className="form-status success" role="status">
              Your email app should now open with the message ready to send.
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
