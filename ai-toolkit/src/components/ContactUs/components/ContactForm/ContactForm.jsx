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
  const [showCallPanel, setShowCallPanel] = useState(false);

  const onSubmit = (event) => {
    if (event) {
      event.preventDefault(); //for preventing page default refresh
      // setName(event.target[0].value);
      // setEmail(event.target[1].value);
      // setText(event.target[2].value);
    }
  };

  const handleSupportChatClick = () => {
    window.open("https://wa.me/923179889883", "_blank");
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
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="John Peter" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="abc@example.com" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" placeholder="Description" />
          </div>
          <div className={styles.submit}>
            <Button text="SUBMIT" />
          </div>
          {/* <p>
            {`Name: ${name}`} <br /> {`Email: ${email}`} <br />{" "}
            {`Text: ${text}`}
          </p> */}
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
