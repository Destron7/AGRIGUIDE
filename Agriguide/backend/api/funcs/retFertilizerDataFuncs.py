import pandas as pd
from api.utils import fertilizer
from django.utils.html import format_html

def fetchFertData(inpData):
    df = pd.read_csv(
        r"D:\Pro\KHUSHI\Agriguide\backend\api\Machines\datasets\Fertilizer.csv"
    )
    print(f"N: {inpData["nitrogen"]}  P: {inpData["phosphorus"]} crop:    {inpData["cropname"]}     K:  {inpData["pottasium"]}")
    print(df.head())

    N = inpData["nitrogen"]
    P = inpData["phosphorus"]
    K = inpData["pottasium"]

    uniqueCrops = df['Crop'].unique()
    if inpData["cropname"] in uniqueCrops:
        filtered_df = df[df["Crop"] == str(inpData["cropname"])].iloc[0]

        nr = filtered_df['N']
        pr = filtered_df['P']
        kr = filtered_df['K']

        n = nr - N
        p = pr - P
        k = kr - K

        temp = {abs(n): "N", abs(p): "P", abs(k): "K"}
        max_value = temp[max(temp.keys())]

        if max_value == "N":
            key = 'NHigh' if n < 0 else "Nlow"
        elif max_value == "P":
            key = 'PHigh' if p < 0 else "Plow"
        else:
            key = 'KHigh' if k < 0 else "Klow"

        response_message = format_html(fertilizer.fertilizer_dic[key])
    else:
        return ({"message":"Crop data not available"})
    print(response_message)

    return ({"html_response": response_message, "message":"Methods Exempted Successfully"})
