import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";
import image2 from "../image2.png"; // Import the image

const ContactForm = () => {
  // const [name, setName] = useState(undefined);
  // const [email, setEmail] = useState(undefined);
  // const [text, setText] = useState(undefined);
  const [formData, setFormData] = useState({ name: "", email: "", text: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCallPanel, setShowCallPanel] = useState(false);

  // const onSubmit = (event) => {
  //   if (event) {
  //     event.preventDefault(); //for preventing page default refresh
  //     // setName(event.target[0].value);
  //     // setEmail(event.target[1].value);
  //     // setText(event.target[2].value);
  //   }
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSupportChatClick = () => {
    window.open("https://wa.me/923179889883", "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Message sent successfully!");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error sending message. Please try again later.");
    }
    setLoading(false);
  };

  const handleCallClick = () => {
    setShowCallPanel(true);
    setTimeout(() => {
      setShowCallPanel(false);
    }, 5000); // Hide panel after 5 seconds
  };

  return (
    <section className={styles.form_section}>
      <div>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="20px" />}
              onClick={handleSupportChatClick}
            />
            <Button
              text="VIA CALL"
              icon={<FaPhoneAlt fontSize="20px" />}
              onClick={handleCallClick}
            />
          </div>
          <Button
            isOutline="true"
            text="VIA EMAIL FROM"
            icon={<HiMail fontSize="20px" />}
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Peter"
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@example.com"
            />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>
          <div className={styles.submit}>
            <Button
              text={loading ? "Sending..." : "SUBMIT"}
              disabled={loading}
            />
          </div>
          {message && <p>{message}</p>}
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src={image2} alt="Contact form illustration" />
      </div>
      {showCallPanel && (
        <div className={styles.call_panel}>
          Dear User, call on (92-3309271727)
        </div>
      )}
    </section>
  );
};

export default ContactForm;

// import { useState } from "react";
// import { MdMessage } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { HiMail } from "react-icons/hi";
// import Button from "../Button/Button";
// import styles from "./ContactForm.module.css";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", text: "" });
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:3001/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Message sent successfully!");
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       setMessage("Error sending message. Please try again later.");
//     }
//     setLoading(false);
//   };

//   return (
//     <section className={styles.form_section}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.form_control}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="John Peter"
//           />
//         </div>

//         <div className={styles.form_control}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="abc@example.com"
//           />
//         </div>

//         <div className={styles.form_control}>
//           <label htmlFor="text">Message</label>
//           <textarea
//             name="text"
//             value={formData.text}
//             onChange={handleChange}
//             placeholder="Description"
//           />
//         </div>

//         <div className={styles.submit}>
//           <Button text={loading ? "Sending..." : "SUBMIT"} disabled={loading} />
//         </div>

//         {message && <p>{message}</p>}
//       </form>
//     </section>
//   );
// };

// export default ContactForm;
