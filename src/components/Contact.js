import email from "../images/email.png";
import phone from "../images/phone.png";
import "./Contact.css";
export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-12 text-center">
                        <div class="contact-header">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="contact-ways">
                        <div class="contact-header-quote">
                            <img src={email} height="30px" width="40px"/>
                            <h3>ivyzhang0309@gmail.com</h3>
                        </div>
                       
                        <div class="contact-header-quote">
                            <img src={phone} height="40px" width="40px"/>
                            <h3>716-239-4333 ext.7003</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12 text-center">
                        <div class="contact-footer">
                            <p>Feel free to reach out to me......</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}