import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="contact" id="contact">
                <h2 className="heading">
                    Contact <span>Me!</span>
                </h2>
                <form
                    action="https://formsubmit.co/mateohernandez199605@gmail.com"
                    method="POST"
                >
                    <div className="input-box">
                    <div className="input-field">
                        <input
                        type="text"
                        name="footer-text"
                        placeholder="Full Name"
                        requiere=""
                        />
                        <span className="focus" />
                    </div>
                    <div className="input-field">
                        <input
                        type="text"
                        name="email"
                        placeholder="Email Adress"
                        requiere=""
                        />
                        <span className="focus" />
                    </div>
                    </div>
                    <div className="input-box">
                    <div className="input-field">
                        <input
                        type="number"
                        name="number"
                        placeholder="Mobile Number"
                        requiere=""
                        />
                        <span className="focus" />
                    </div>
                    <div className="input-field">
                        <input
                        type="text"
                        name="text"
                        placeholder="Email Subject"
                        requiere=""
                        />
                        <span className="focus" />
                    </div>
                    </div>
                    <div className="textarea-field">
                    <textarea
                        name="text"
                        placeholder="Your Message"
                        requiere=""
                        id=""
                        cols={30}
                        rows={10}
                        defaultValue={""}
                    />
                    <span className="focus" />
                    </div>
                    <div className="btn-box btns">
                    <button type="submit" className="btn">
                        Submit
                    </button>
                    </div>
                    <input
                    type="hidden"
                    name="_next"
                    defaultValue="https://mateohernandez.netlify.app"
                    />
                    <input type="hidden" name="_captcha" defaultValue="false" />
                </form>
                </section>

        </div>
    );
}

export default Contact;
