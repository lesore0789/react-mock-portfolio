/* eslint-disable react/no-unescaped-entities */
import './Contact.css'
import patternTheme from '../../assets/theme_pattern.svg'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import callIcon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ad38a772-26e7-4352-bc13-a8a2361bd400");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
      console.log("Success", res);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={patternTheme} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail"><img src={mailIcon} alt="" /><p>awesomedev@dev.com</p></div>
            <div className="contact-detail"><img src={callIcon} alt="" /><p>(555)555-5555</p></div>
            <div className="contact-detail"><img src={locationIcon} alt="" />LA, California</div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder='Enter your email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
