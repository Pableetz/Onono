import React from "react";
import "./Realisation.css";
import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.jpg";
import photo3 from "../../assets/images/photo3.jpg";
import photo4 from "../../assets/images/photo4.jpg";
import photo5 from "../../assets/images/photo5.jpg";
import photo6 from "../../assets/images/photo6.jpg";
import photo7 from "../../assets/images/photo7.jpg";
import backgroundrealisation from "../../assets/images/bgrealisation.jpeg";

const Realisation = () => {
  return (
    <div
      className="realisation-container"
      style={{
        backgroundImage: `url(${backgroundrealisation})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Realisations</h1>
      <div className="realisation-intro">
        <p>Voici quelques unes de nos réalisations</p>
      </div>
      <div className="realisation-pictures">
        <div className="realisation-picture">
          <img src={photo1} alt="photo1" />
        </div>
        <div className="realisation-picture">
          <img src={photo2} alt="photo2" />
        </div>
        <div className="realisation-picture">
          <img src={photo3} alt="photo3" />
        </div>
        <div className="realisation-picture">
          <img src={photo4} alt="photo4" />
        </div>
        <div className="realisation-picture">
          <img src={photo5} alt="photo5" />
        </div>
        <div className="realisation-picture">
          <img src={photo6} alt="photo6" />
        </div>
        <div className="realisation-picture">
          <img src={photo7} alt="photo7" />
        </div>
      </div>
    </div>
  );
};

export default Realisation;
