import React from "react";
import "../../styles/contactus/MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.5099450536!2d55.44378207538765!3d25.320755877618073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f5d02b91cf2b%3A0x33e244ddac6e6e77!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2s!4v1694337892854!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        title="VisioCell Location"
      ></iframe>
    </section>
  );
};

export default MapSection;
