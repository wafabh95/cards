import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
 const [result, setResult] = useState(false)
 const [submit, setSubmit] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    setSubmit(true)
        emailjs.sendForm('service_ismbkhk', 'template_x12wz65', form.current, '4rZZQfP_QOwOtKW5J')
        //account -apikey
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true)
      };
    setTimeout(()=>{
        setResult(false)
    },10000)
  return (
    <div>
         <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" required={true} maxLength={10}/>
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    {result? <h1>mail send</h1> :null}
    </div>
  )
}

export default Contact