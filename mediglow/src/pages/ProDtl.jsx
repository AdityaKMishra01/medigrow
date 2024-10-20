import React, { useState } from "react";
import data from "../data.json";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import "../../public/style.css";

const ProDtl = () => {
  const [like, setLike] = useState(false);
  const { id } = useParams();
  const plant = data.find((item) => item.id === parseInt(id));

  const likeBtn = () => {
    if (like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(plant.description);

    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[4]; // Choose a specific voice

    speechSynthesis.speak(utterance);
  };
  return (
    <>
      <div className="product_Container">
        <div className="product-detail">
          <div className="productImg">
            <img src={plant.image} alt={plant.name} />
          </div>
          <div className="productDet">
            <h1>{plant.name}</h1>
            <p>
              <strong>Botanical Name:</strong> {plant.botanical_name}
            </p>
            <p>
              <strong>Habitate:</strong> {plant.habitat}
            </p>
            <p>
              <strong>Medicinal Uses:</strong> {plant.medicinal_uses}
            </p>
            <p>
              <strong>Methods of Cultivation:</strong>{" "}
              {plant.methods_of_cultivation}
            </p>
            <p>
              <strong>Description:</strong> {plant.description}
            </p>
            <div className="LikeBtn">
              <i
                className={`fa-solid fa-heart ${like ? "active" : ""}`}
                onClick={likeBtn}
              ></i>
              <i class="fa-solid fa-volume-high" onClick={speak}></i>
              <i class="fa-solid fa-share"></i>
              <button><NavLink to={'/model'}>360</NavLink></button>
            </div>
          </div>

          {/* Adding like button */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProDtl;
