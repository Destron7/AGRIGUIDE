import pickle


def RandomForestModelOutput(input):
    model = loadCropModel()
    prediction = model.predict(input)
    return {"recommendedCrop": prediction[0]}


def loadCropModel():
    # SET PATH TO MODEL FILE ACCORDING TO YOUR SYSTEM
    RF_file = open(
        r"D:\Pro\KHUSHI\Agriguide\backend\api\Machines\crop\RandomForest.pkl", "rb"
    )
    RF_model = pickle.load(RF_file)

    return RF_model


# .\Machines\crop\RandomForest.pkl
