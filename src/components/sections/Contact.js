// src/components/sections/Contact.js
const Contact = () => {
    return (
      <section className="contact-section">
        <h2>İletişim</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>İletişim Bilgileri</h3>
            <p>📍 Adres: Your Address Here</p>
            <p>📞 Telefon: (555) 123-4567</p>
            <p>✉️ Email: contact@example.com</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Adınız" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Telefon" />
            <textarea placeholder="Mesajınız"></textarea>
            <button type="submit" className="submit-button">
              Gönder
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;