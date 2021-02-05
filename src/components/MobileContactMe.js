import { useEffect, useState } from "react"

import emailjs from "emailjs-com"

const MobileContactMe = (props) => {

    const [emailText, setEmailText] = useState("Sending...")
    const [emailDiv, setEmailDiv] = useState("none")

    useEffect(() => {
        props.menuClose()
    }, [])

    function sendEmail(e) {
        e.preventDefault();
        setEmailDiv("")
        setEmailText("Sending...")
        emailjs.sendForm('service_xhpiebu', 'template_n2xgap7', e.target, 'user_3mYfrOcpDiD2jB1VinkuJ')
          .then((result) => {
            setEmailText("Sent!")
          }, (error) => {
            setEmailText("Error!")
          });
          e.target.reset()
    }

    return(
        <div className="mobile-div-1">
            <h1 className="simon-ugor-heading">Contact Me</h1>

            <form onSubmit={sendEmail} className="contact-form">
                <input className="contact-input" type="textbox" name="name" placeholder="Name/Company"></input>
                <input className="contact-input" type="textbox" name="email" placeholder="Email"></input>
                <input className="contact-input" type="textbox" name="subject" placeholder="Subject"></input>
                <textarea className="contact-textarea" name="text" placeholder="Text"></textarea>
                <button className="div1-button">Send</button>
            </form>

            <div style={{display: emailDiv}} className="email-sending-div">
                <div className="email-sending-content-div">
                    <p>{emailText}</p>
                </div>
            </div>
        </div>
    )
}

export default MobileContactMe