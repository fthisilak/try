// src/components/sections/Services.js
const Services = () => {
    const services = [
      {
        title: "Online Diyet",
        description: "Uzaktan takip ve beslenme danışmanlığı hizmeti",
        icon: "🌐"
      },
      {
        title: "Kişisel Beslenme",
        description: "Size özel hazırlanmış beslenme programları",
        icon: "📋"
      },
      {
        title: "Kilo Yönetimi",
        description: "Sağlıklı kilo verme ve alma programları",
        icon: "⚖️"
      }
    ];
  
    return (
      <section className="services-section">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;
  