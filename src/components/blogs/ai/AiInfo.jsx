import React from "react";
import "../../../styles/blogs/ai/AiInfo.css";
import aiImage from "../../../assets/blogs/AiInfibg.jpg";

const AiInfo = () => {
  return (
    <section className="aiinfo-section">
      <div className="container">
        <div className="card aiinfo-card border-0 shadow-sm mb-4">
          <img
            src={aiImage}
            alt="AI Future"
            className="card-img-top aiinfo-image"
          />
        </div>

        <div className="aiinfo-content text-white">
          <p>
            As artificial intelligence (AI) continues to expand, inquiries
            regarding its implications for businesses, consumers, and the
            overall economy have surfaced. Employees are growing more interested
            in understanding how AI might affect their jobs, while companies are
            keen on capitalizing on the opportunities presented by this emerging
            trend. There is a prevailing belief that AI has the potential to
            revolutionize manufacturing and address significant global
            environmental challenges, including population growth and a
            persistently stagnant annual economic growth rate. Nevertheless,
            only time will unveil the trajectory that this technology will chart
            for the region’s economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiInfo;
