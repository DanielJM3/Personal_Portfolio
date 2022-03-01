function Contact() {
  return(
    <div id="contact-container">
    <h2>Contact</h2>
    <form id="contact-form">
      <div class="form-row">
        <input placeholder="Full Name" type="text" id="name" name="name" class="col"></input>
        <input placeholder="Email Address" type="text" id="email" name="email" class="col"></input>
        <input placeholder="Buisness Name" type="text" id="buisness" name="buisness" class="col"></input>
      </div>
      <div class="form-row">
        <textarea placeholder="How can I help you?" class="col"></textarea>
      </div>
      <div class="form-row">
        <button class="submit-btn">Submit</button>
      </div>
    </form>
  </div>
    );
}

export default Contact;