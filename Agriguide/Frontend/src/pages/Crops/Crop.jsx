import React, { useState } from 'react';
import './Crop.css'; // Import the CSS file
import crop from '../../images/C6.jpg'; // Import the image
import axios from 'axios';


function Crop() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorous: '',
    pottasium: '',
    ph: '',
    rainfall: '',
    humidity: '',
    temperature: '',
  });

  const [prediction, setPrediction] = useState(null); // New state to store API response
  const [error, setError] = useState(null); // New state for error handling


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setError("")
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/crop/', formData);
      setPrediction(response.data); // Store response in prediction state
      console.log(response.data);
    } catch (error) {
      setError('Failed to fetch prediction. Please try again.'); // Handle errors
    }
    console.log(formData);
  };

  return (

    <div className='form-body'>
      <img src={crop} alt="" />
      <div className="form-container">
        <h2 className="form-header">
          <b>Find out the most suitable crop to grow in your farm</b>
        </h2>
        <form onSubmit={handleSubmit} method="POST" action="/crop-prediction" className="form-grid">

          <div className="form-group">
            <label htmlFor="Nitrogen"><b>Nitrogen</b></label>
            <input
              type="number"
              className="form-control"
              id="Nitrogen"
              name="nitrogen"
              value={formData.nitrogen}
              onChange={handleChange}
              placeholder="Enter the value (example: 50)"
              required

            />
          </div>

          <div className="form-group">
            <label htmlFor="Phosphorous"><b>Phosphorous</b></label>
            <input
              type="number"
              className="form-control"
              id="Phosphorous"
              name="phosphorous"
              value={formData.phosphorous}
              onChange={handleChange}
              placeholder="Enter the value (example: 50)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Pottasium"><b>Potassium</b></label>
            <input
              type="number"
              className="form-control"
              id="Pottasium"
              name="pottasium"
              value={formData.pottasium}
              onChange={handleChange}
              placeholder="Enter the value (example: 50)"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ph"><b>pH level</b></label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="ph"
              name="ph"
              value={formData.ph}
              onChange={handleChange}
              placeholder="Enter the value"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="Rainfall"><b>Rainfall (in mm)</b></label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="Rainfall"
              name="rainfall"
              value={formData.rainfall}
              onChange={handleChange}
              placeholder="Enter the value"
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="Humidity"><b>Humidity (%)</b></label>
            <input
              type="number"
              className="form-control"
              id="Humidity"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              placeholder="Enter value (example: 60)"
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="Temperature"><b>Temperature (°C)</b></label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="Temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Enter value (example: 25.5)"
              required
            />

          </div>


          <div className="form-submit">
            <button type="submit" className="btn btn-info">
              Predict
            </button>
          </div>
        </form>
        {/* Output Section */}
        <div className="output-section">
          {prediction?.recommendedCrop && (
            <div className="prediction-result">
              <h3>Prediction Result:</h3>
              <h1 style={{ color: "brown", fontWeight: "bold" }}>{JSON.stringify(prediction?.recommendedCrop)}</h1> {/* Display the prediction */}
            </div>
          )}
          {error && <p className="error">{error}</p>}
          {error && setError(null)} {/* Display any error messages */}
        </div>
      </div>
    </div>

  );
};

export default Crop;
