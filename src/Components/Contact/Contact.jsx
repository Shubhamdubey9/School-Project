import React from 'react'
import './Contact.css'
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "04fbb63c-9031-4378-a2f2-0dc98019ffb5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>
                Feel free to reach out through contact form or find our contact
                information below. Your feedback, question, and suggestio are 
                important to us as we strive to provide exceptional service to 
                our univerity community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />dubeyshubham958@gmail.com</li>
                <li><img src={phone_icon} alt="" />+91 8340354991</li>
                <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/> MA 0239,United State</li>
                
            </ul>
       </div>
       <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone'placeholder='Your Mobile Number' required />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='Submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>

       </div>

    </div>
  )
}

export default Contact