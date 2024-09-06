import React from "react";
import "./Home.css";
import bgImage from "../../assets/images/bgfixe.jpg";
import architecture from "../../assets/images/architecture.jpg";
import industrie from "../../assets/images/industrie.jpg";
import interieur from "../../assets/images/archinterieur.jpg";
import avantapres from "../../assets/images/avantapres.jpg";
import { BiTimer } from "react-icons/bi";
import { MdEuroSymbol } from "react-icons/md";
import { GiFlexibleLamp } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="home-title">Axel Guyot dessins</div>
      <div className="home-subtitle">
        Dessinateur, projetteur, démonteur, cachotier
      </div>

      <div className="home-presentation">
        <p>
          Un projet de construction ? Besoin de plan industriel ou d'un permis
          de construire ? Je suis là pour vous accompagner.
        </p>
        <div className="home-presentation-buttons">
          <button className="btn">
            <Link to="/realisation">Mes réalisations</Link>
          </button>
          <button className="btn">
            <Link to="/contact">Me contacter</Link>
          </button>
        </div>
      </div>
      <div className="home-dessins">
        <div className="home-dessin">
          <img src={architecture} alt="architecture" />
          <div className="overlay-text">
            <p>Architecture</p>
          </div>
        </div>
        <div className="home-dessin">
          <img src={industrie} alt="industrie" />
          <div className="overlay-text">
            <p>Industrie</p>
          </div>
        </div>
        <div className="home-dessin">
          <img src={interieur} alt="interieur" />
          <div className="overlay-text">
            <p>Intérieur</p>
          </div>
        </div>
        <div className="home-dessin">
          <img src={avantapres} alt="avant-apres" />
          <div className="overlay-text">
            <p>Projet</p>
          </div>
        </div>
      </div>
      <div className="avantages-title">
        <h2>Les avantages d'être Dessinateur indépendant</h2>
      </div>
      <div className="avantages">
        <div className="avantage">
          <div className="avantage-icon">
            <BiTimer />
          </div>
          <h2>Temps</h2>
          <p>Des délais respectés et adaptés à votre planning</p>
        </div>
        <div className="avantage">
          <div className="avantage-icon">
            <GiFlexibleLamp />
          </div>
          <h2>Flexibilité</h2>
          <p>Des réponses rapides à toutes vos demandes</p>
        </div>
        <div className="avantage">
          <div className="avantage-icon">
            <MdEuroSymbol />
          </div>
          <h2>Coût</h2>
          <p>Un petit prix pour une prestation de qualité</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
