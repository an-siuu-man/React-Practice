import './ContactUs.css';
import Section from "./Section";

const ContactUs = () => {

    const content = "We're located at 1301 Jayhawk Blvd, Lawrence, KS 66045.";
    
    return (
        <div className="contact-us">
            <Section title='Contact Us' content={content} />
            <p>For general inquiries, please email us at <a href="mailto:beaconofhopeku@gmail.com?subject=General%20Enquiry">beaconofhopeku@gmail.com</a></p>
            {/* <h2>Contact Us</h2>
            <p></p> */}
        </div>
    );
}
 
export default ContactUs;