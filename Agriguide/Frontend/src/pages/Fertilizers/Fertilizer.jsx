import React, { useState } from 'react';
import "../Crops/Crop.css";
import crop from '../../images/C5.avif'; // Your image path
import axios from 'axios'; // If you're using axios for form submission

const FertilizerForm = () => {
    const [formValues, setFormValues] = useState({
        nitrogen: '',
        phosphorous: '',
        pottassium: '',
        cropname: ''
    });

    const [prediction, setPrediction] = useState(null); // Store the prediction response
    const [error, setError] = useState(null); // Store any error messages

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear error before submission

        try {
            console.log(formValues);
            const response = await axios.post('http://localhost:8000/api/fertilizer/', formValues, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Ensure correct Content-Type
                }
            });
            setPrediction(response.data); // Assuming response.data contains the prediction
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'Something went wrong. Please try again.');
            } else {
                setError('Failed to fetch prediction. Please check your network connection.');
            }
        }
    };

    return (
        <div className='form-body'>
            <img src={crop} alt="Crop" />
            <div className="form-container">
                <h2 className="form-header">
                    <b>Find out the most suitable crop to grow in your farm</b>
                </h2>
                <form onSubmit={handleSubmit} className="form-grid">
                    <div className="form-group">
                        <label htmlFor="Nitrogen"><b>Nitrogen</b></label>
                        <input
                            type="number"
                            className="form-control"
                            id="Nitrogen"
                            name="nitrogen"
                            value={formValues.nitrogen}
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
                            value={formValues.phosphorous}
                            onChange={handleChange}
                            placeholder="Enter the value (example: 50)"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Pottassium"><b>Potassium</b></label>
                        <input
                            type="number"
                            className="form-control"
                            id="Pottassium"
                            name="pottassium"
                            value={formValues.potassium}
                            onChange={handleChange}
                            placeholder="Enter the value (example: 50)"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cropname"><b>Crop Name</b></label>
                        <input
                            type="text"
                            className="form-control"
                            id="cropname"
                            name="cropname"
                            value={formValues.cropname}
                            onChange={handleChange}
                            placeholder="Enter the crop name"
                            required
                        />
                    </div>

                    <div className="form-submit">
                        <button type="submit" className="btn btn-info">Predict</button>
                    </div>
                </form>

                {/* Output Section */}
                <div className="output-section">
                    {prediction && (
                        <div className="prediction-result">
                            {/* <h3>Prediction Result:</h3> */}
                            <span style={{ color: "white", fontWeight: "bold" }} dangerouslySetInnerHTML={{ __html: prediction?.html_response }}></span>
                        </div>
                    )}
                    {error && <p className="error">{error}</p>} {/* Display any error messages */}
                </div>
            </div>
        </div>
    );
};

export default FertilizerForm;
