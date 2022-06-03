import React,{ useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';
const ContactMe = () => {
    const [result, setResult] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_f54uj8v', 'template_s74imdb', form.current, 'Mgf1grDef6wGxZNX6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setResult(true)
        e.target.reset()
        setTimeout(()=>setResult(false),5000)
    };

  return (
    <div>ContactMe
         <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
     { result ? <h1>msg envoyé</h1> : null}
    </form>
    </div>
  )
}

export default ContactMe