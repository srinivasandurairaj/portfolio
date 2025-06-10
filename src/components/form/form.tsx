import { useState } from "react";

import styles from "./form.module.css";
import nextConfig from "../../../next.config";

export const Form = () => {
  const {
    formTitle,
    secondaryFormTitle,
    inputContainer,
    inputField,
    textArea,
    button: buttonStyle,
  } = styles;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await fetch(`${nextConfig.basePath}/api/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { status } = await response;
    if (status === 200) {
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className={formTitle}>Want to connect?</h2>
        <p className={secondaryFormTitle}>Reach out:</p>
        <div className={inputContainer}>
          <input
            placeholder="Your Name"
            className={inputField}
            name={"name"}
            value={formData.name}
            onChange={handleInputChange}
            type="text"
          />
          <input
            placeholder="Your Email Address"
            className={inputField}
            name={"email"}
            value={formData.email}
            onChange={handleInputChange}
            type="text"
          />
          <textarea
            placeholder="Message"
            className={textArea}
            name={"message"}
            value={formData.message}
            onChange={handleInputChange}
          />
          <button className={buttonStyle} type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
