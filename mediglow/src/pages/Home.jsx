import React, { useEffect, useState } from "react";
import "../../public/style.css";
import Typewriter from "typewriter-effect";
import data from "../data.json";
import image1 from "../../public/images/michael-c-sRYCYJcjanU-unsplash.jpg";
import image2 from "../../public/images/background2.jpg";
import image3 from "../../public/images/background3.jpg";
import image4 from "../../public/images/background4.jpg";
import Footer from '../components/Footer';
import { NavLink } from "react-router-dom";

const Home = () => {
  let DisplayData = data.slice(0, 4);
  const [backgnd, setBackGnd] = useState(image1);
  const imgArr = [image1, image2, image3, image4];

  useEffect(() => {
    let indx = 0;
    setInterval(() => {
      indx += 1;
      if (indx === imgArr.length) {
        indx = 0;
      }

      setBackGnd(imgArr[indx]);
    }, 5000);
  }, []);

  return (
    <>
      <div className="mainContr">
        <div className="home" style={{ backgroundImage: `url(${backgnd})` }}>
          <div className="typingText">
            <p>
              Hi, Welcome to <span>MediGROW</span>
            </p>
            <p>Healing Starts in Nature’s Garden,</p>
            <div className="typewriter-container">
              <Typewriter
                options={{
                  strings: ["Your Guide to Natural Wellness."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className="btn">
              <button className="btnStart"><NavLink to={`/product`} >Click me!</NavLink></button>
            </div>
          </div>
        </div>
        <div className="hading">
          <h1>Quich Check</h1>
        </div>
        <div className="pContainer">
          {DisplayData.map((item) => (
            <div className="plantCont" key={item.id}>
              <div className="hov">
                <button className="checkBtn">
                  <NavLink to={`/prodtl/${item.id}`}>
                    {" "}
                    <i class="fa-solid fa-chevron-right"></i>
                  </NavLink>
                </button>
              </div>

              <div className="image">
                <img src={item.image} className="imgs" />
              </div>
              <div className="details">
                <h2>{item.name}</h2>
                <p>{item.botanical_name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="listedPro">
          <div className="listImg">
            <img
              className="LImg"
              src="../../public/images/tulsi.jpg"
            />
          </div>
          <div className="LiDtl">
            <h1>Holy basil (Tulsi)</h1>
            <p>
              <strong>Ocimum tenuiflorum</strong>, commonly known as holy basil, tulsi or tulasi,
              is an aromatic perennial plant in the family Lamiaceae. It is
              widely cultivated throughout the Southeast Asian tropics. It is
              native to tropical and subtropical regions of Asia, Australia and
              the western Pacific. This plant has escaped from cultivation and
              has naturalized in many tropical regions of the Americas. It is an
              agricultural and environmental weed. Tulasi is cultivated for
              religious and traditional medicine purposes, and also for its
              essential oil. It is widely used as an herbal tea, commonly used
              in Ayurveda, and has a place within the Vaishnava tradition of
              Hinduism, in which devotees perform worship involving holy basil
              plants or leaves.
            </p>
            <div className="sorc">
              <p>
                Source: <a href="https://en.wikipedia.org/wiki/Ocimum_tenuiflorum">Wikipedia</a>
              </p>
            </div>
          </div>
        </div>
        <div className="topUser">
          
        </div>
      <Footer />
      </div>
    </>
  );
};

export default Home;
