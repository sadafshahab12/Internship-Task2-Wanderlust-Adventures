import React, { useState } from "react";
import Button from "./ui/Button";
import { contactInfo } from "../data";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const handleonchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setMessage("Form Submitted Successfully");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => {
      setMessage("");
    }, 1000);
  };
  return (
    <div className="font-opensans p-5">
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold text-center pb-5 ">
        Contact us
      </h1>
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-md "
          >
            <source src="/form bg.mp4" />
          </video>
          <form className="flex flex-col gap-6 justify-center p-5   rounded-md relative z-10 ">
            <input
              type="text"
              placeholder="Enter Your name"
              name="name"
              value={formData.name}
              onChange={handleonchange}
              className="forminput"
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleonchange}
              className="forminput"
            />
            <textarea
              name="message"
              value={formData.message}
              rows={8}
              placeholder="Enter Your Message here..."
              className="forminput "
              onChange={handleonchange}
            ></textarea>
            <div onClick={handleSubmit}>
              <Button btnText={"Send Message"} />
            </div>
            {message && <p className="text-white">{message}</p>}
          </form>{" "}
        </div>
        <div className="relative p-5">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          >
            <source src="/contact.mp4" type="video/mp4" />
          </video>

          {/* Social Media Icons */}
          <div className="flex flex-col justify-center items-center space-x-6 relative z-10 text-golden space-y-5 h-full rounded-md text-center">
            <h3 className="text-3xl font-bold">Contact Info</h3>
            <p className="sm:text-[18px] text-sm">{contactInfo.address}</p>
            <p className="sm:text-[18px] text-sm">{contactInfo.email}</p>
            <p className="sm:text-[18px] text-sm">{contactInfo.phone}</p>
            <div className="flex items-center gap-4">
              <a
                href={contactInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="contacticon"
              >
                <FaInstagram />
              </a>
              <a
                href={contactInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contacticon"
              >
                <FaLinkedin />
              </a>
              <a
                href={contactInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="contacticon"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
