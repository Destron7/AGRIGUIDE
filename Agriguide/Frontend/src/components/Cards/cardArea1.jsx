import React from "react";
import C1 from "../../images/C1.jpg" // Assuming images are in src/images folder
import C14 from "../../images/C14.jpeg";
import C3 from "../../images/C3.jpeg";
import './App1.css';


function CardArea1() {
  return (
    <div>
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src={C1} alt="Crops" />
              <div className="overlay">
                <h3>Crops</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolor, libero asperiores, a officia nihil, obcaecati
                  reiciendis quos neque delectus ullam? Possimus placeat tempora
                  laborum, in praesentium rerum beatae obcaecati!
                </p> */}
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="box">
              <img src={C14} alt="Fertilizer" />
              <div className="overlay">
                <h3>Fertilizer</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolor, libero asperiores, a officia nihil, obcaecati
                  reiciendis quos neque delectus ullam? Possimus placeat tempora
                  laborum, in praesentium rerum beatae obcaecati!
                </p> */}
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="box">
              <img src={C3} alt="Diseases" />
              <div className="overlay">
                <h3>Diseases</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  dolor, libero asperiores, a officia nihil, obcaecati
                  reiciendis quos neque delectus ullam? Possimus placeat tempora
                  laborum, in praesentium rerum beatae obcaecati!
                </p> */}
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardArea1;
