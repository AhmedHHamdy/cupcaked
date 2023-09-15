import "../App.css"

export default function Contact() {
  return (
    <section className="contact-page-container">
      <div className="contact-page-form">
        <h1>Talk to us.</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />


          <label htmlFor="email">Email Address</label>
          <input type="text" name="name" id="email" />


          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" />

          <button>Send</button>
        </form>
      </div>

      <div className="contact-page-info">
        <p>Have questions or feedback? We'd love to hear from you! Feel free to reach out. <br /> <br /> We're here to help and provide you with the information you need.</p>
      </div>
    </section>
  )
}