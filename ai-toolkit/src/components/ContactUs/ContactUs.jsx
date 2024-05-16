import "./contact.css";
//import Button from "./components/Button/Button";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
//import Navigation from "./components/Navigation/Navigation";

function ContactUs
() {
  return (
    <div className="container-contactus">
      {/* <Navigation /> */}
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default ContactUs;
