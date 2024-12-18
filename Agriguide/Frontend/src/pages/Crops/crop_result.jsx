import React from 'react';
import './crop_result.css'; // Import the CSS file

function CropResult({ prediction }) {
  return (
    <div className="container py-2 mx-auto my-50 h-10 crop-container">
      <div className="row">
        <div className="col-sm py-2 py-md-3">
          <div className="card card-body" style={{ justifyContent: 'center' }}>
            <h1 className="text-center">
              <b>You should grow <i>{prediction}</i> in your farm</b>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropResult;
