import React from "react";
import "../../../styles/blogs/future/FutureInfo.css";
import futureImage from "../../../assets/blogs/FutureBg.jpg";

const FutureInfo = () => {
  return (
    <section className="futureinfo-section">
      <div className="container">
        <div className="card futureinfo-card border-0 shadow-sm mb-4">
          <img
            src={futureImage}
            alt="Future Technology"
            className="card-img-top futureinfo-image"
          />
        </div>

        <div className="futureinfo-content text-white">
          <p>
            Technological innovation, spanning from the invention of the wheel
            to recent advancements in artificial intelligence, has significantly
            transformed human existence. While bringing about positive changes
            such as increased connectivity and efficiency, technology has also
            introduced challenges like dependency, cyberbullying, and privacy
            concerns. The ongoing emergence of new technologies in the future
            holds both promise and potential risks. Balancing the positive and
            negative effects of these advancements is crucial for shaping a
            technologically integrated yet responsible society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureInfo;
