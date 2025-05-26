import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import axios from"axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await axios.post("http://localhost:5000/api/contact",formData);
        if(response.data.success){
          alert("Message Sent Successfully!");
          setFormData({name:"",email:"",message:""})
        }else{
          alert("Failed to send Message.")
        }
      }catch(error){
          console.error("Error sending message:",error);
          alert("Error sending message.Please try again later.")
      }
    
  }
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out for collaboration or just a friendly hello 👋
      </p>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>
            <FaEnvelope />
            sankarz2002@gmail.com
          </p>
          <p>
            <FaPhone />
            +91-9363207767
          </p>
          <p>
            <FaLinkedin />
            <a
              href="http://linkedin.com/in/sankarz0206"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <FaGithub />
            <a
              href="https://github.com/sankarzhub"
              target="_blank"
              rel="noopener norefferer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
