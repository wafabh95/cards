import React,{ useRef ,useState} from 'react'
import emailjs from '@emailjs/browser';

const DesignForm = () => {
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
    <div className="body">
          <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
         <form>
        <h3>Contact me</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>send</button>
        <div className="social">
          {/* <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div> */}
        </div>
    </form>
    </div>
  )
}

export default DesignForm