

const FormSection = () => {

return(
  <div className="form-container">
    <form id = "Contact-Form" >
        <div className="form-grid-item">
            <label htmlFor="first_name">First name</label> <br />
            <input id = "first_name" className="first-name" type={"text"} placeholder ="Enter your first name" required></input>
        </div>
        <div className="form-grid-item">
            <label htmlFor="last_name">Last name</label><br />
            <input id = "last_name" className="last-name" type={"text"} placeholder ="Enter your last name" required></input>
        </div>
        <div className="form-grid-item email-div">
            <label htmlFor="email">Email</label><br />
            <input id = "email" className="email" type={"email"} placeholder ="yourname@gmail.com" required></input>
        </div>
        <div className="form-grid-item message-div">
            <label htmlFor="message">Message</label><br />
            <textarea required name="message" id="message" className="message" placeholder="Send me a message and I'll reply you as soon as possible..." cols="30" rows="10"></textarea>
        </div>
        <div className="form-grid-item checkbox-div">
            <label className="agreement-label" htmlFor="agreement">
                <input required id="agreement" className="checkbox-input" type={"checkbox"}></input>
                <span className="checkbox-replacement"></span>
                 &nbsp; You agree to provide your data to Divine Nwabuife who may contact you
            </label>
        </div>
        <div className="form-grid-item submit-div">
            <button id="btn__submit" type="submit">Send message</button>
        </div>
    </form>
  </div>
);

}

export default FormSection;
