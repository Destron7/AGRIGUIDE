import pickle
import numpy as np
import sklearn as sk
import pandas as pd

print(pickle.format_version)
print("SKLEARN: ", sk.__version__)

# RANDOM FOREST
# Written in binary mode
RF_file = open(r"D:\Pro\KHUSHI\djangoProject\api\Machines\crop\RandomForest.pkl", "rb")
RF_model = pickle.load(RF_file)

X_test = pd.DataFrame(
    [[104, 18, 30, 23.6, 60.3, 6.7, 140.91]],
    columns=["N", "P", "K", "temperature", "humidity", "ph", "rainfall"],
)

prediction = RF_model.predict(X_test)


# XG BOOST
label_encoder_file = open(r"D:\Pro\KHUSHI\djangoProject\api\Machines\crop\LabelEncoder.pkl", "rb")
label_encoder = pickle.load(label_encoder_file)

XG_file = open(r"D:\Pro\KHUSHI\djangoProject\api\Machines\crop\XGBoost.pkl", "rb")
XG_model = pickle.load(XG_file)

XG_file = open(r"D:\Pro\KHUSHI\djangoProject\api\Machines\crop\XGBoost.pkl", "rb")
XG_model = pickle.load(XG_file)

data = np.array([[104, 18, 30, 23.6, 60.3, 6.7, 140.91]])
prediction_encoded = XG_model.predict(data)
prediction = label_encoder.inverse_transform(prediction_encoded)

print(prediction)
