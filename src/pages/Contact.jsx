const Contact = () => (
  <section className="page contact">
    <h2>Contact Us</h2>

    <div className="contact-grid">
      <div className="contact-details">
        <h3>📞 Customer Support</h3>
        <p>
          Call us: <a href="tel:+919884028915">+91 98840 28915</a><br />
          Email: <a href="mailto:bharathrajmenan0@gmail.com">bharathrajmenan0@gmail.com</a>
        </p>

        <h3>🕒 Business Hours</h3>
        <p>Mon - Sat: 6:00 AM – 6:00 PM<br />Sunday: Closed</p>

        <h3>💬 Live Chat</h3>
        <p>Use the chat bubble in the bottom-right corner to speak with our support team 24/7.</p>
      </div>

      <div className="contact-form">
        <h3>📧 Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>

    <div className="contact-promo">
      💥 Need help placing an order? Call our team anytime — we're here to assist!
    </div>
  </section>
);

export default Contact;
