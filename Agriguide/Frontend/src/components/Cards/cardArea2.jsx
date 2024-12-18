import React from 'react';
import './App2.css';
import C11 from '../../images/C11.jpeg'; // Adjust the path as necessary
import C13 from '../../images/C13.jpeg'; // Adjust the path as necessary
import C16 from '../../images/C16.jpeg'; // Adjust the path as necessary

function CardArea2 (){
  return (
    <div className="wrapper">
      <div className="card">
        <img src={C11} alt="No image Found" className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Crops</h1>
          <p className="card-sub-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            inventore expedita unde eius fugit laborum et suscipit ad voluptatum,
            consequuntur eligendi consequatur quidem laboriosam nemo optio at
            consectetur maiores cum.
          </p>
          <button className="card-btn">Read More</button>
        </div>
      </div>

      <div className="card">
        <img src={C13} alt="No image Found" className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Fertilizer</h1>
          <p className="card-sub-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            inventore expedita unde eius fugit laborum et suscipit ad voluptatum,
            consequuntur eligendi consequatur quidem laboriosam nemo optio at
            consectetur maiores cum.
          </p>
          <button className="card-btn">Read More</button>
        </div>
      </div>

      <div className="card">
        <img src={C16} alt="No image Found" className="card-img" />
        <div className="card-body">
          <h1 className="card-title">Diseases</h1>
          <p className="card-sub-title">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            inventore expedita unde eius fugit laborum et suscipit ad voluptatum,
            consequuntur eligendi consequatur quidem laboriosam nemo optio at
            consectetur maiores cum.
          </p>
          <button className="card-btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default CardArea2;