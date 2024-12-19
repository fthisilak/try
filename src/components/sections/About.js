// src/components/sections/About.js
const About = () => {
    return (
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Hakkımda</h2>
            <p>10 yıllık tecrübemle sağlıklı beslenme konusunda 
               danışanlarıma destek oluyorum.</p>
            <p>Uzman diyetisyen olarak amacım, kişilerin yaşam 
               tarzlarına uygun, sürdürülebilir beslenme 
               alışkanlıkları kazanmalarını sağlamak.</p>
          </div>
          <div className="about-image">
            {/* Buraya diyetisyen fotoğrafı gelecek */}
          </div>
        </div>
      </section>
    );
  };
  
  export default About;