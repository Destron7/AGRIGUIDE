from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
import pandas as pd
from .serializer import FertilizerPredictSerializer
from .funcs import retCropDataFuncs
from api.funcs.retFertilizerDataFuncs import fetchFertData


@api_view(["POST"])
def crop_view(request):
    if request.method == "POST":
        myInput = {
            "N": float(request.data.get("nitrogen")),
            "P": float(request.data.get("phosphorous")),
            "K": float(request.data.get("pottasium")),
            "temperature": float(request.data.get("temperature")),
            "humidity": float(request.data.get("humidity")),
            "ph": float(request.data.get("ph")),
            "rainfall": float(request.data.get("rainfall")),
        }
        myInput = pd.DataFrame(myInput, index=[0])
        print(myInput)

        prediction = retCropDataFuncs.RandomForestModelOutput(myInput)
        return JsonResponse(data=prediction, status=status.HTTP_200_OK)


@api_view(["POST"])
def fertilizer_view(request):
    if request.method == "POST":
        serializer = FertilizerPredictSerializer(data=request.data)

        if serializer.is_valid():
            crop_name = serializer.validated_data["cropname"]
            N = serializer.validated_data["nitrogen"]
            P = serializer.validated_data["phosphorous"]
            K = serializer.validated_data["pottassium"]

            input_data = {
                "nitrogen": N,
                "phosphorus": P,
                "pottasium": K,
                "cropname": crop_name,
            }
            print(N, P, K, crop_name)

            outData = fetchFertData(input_data)
            print(outData)
            return JsonResponse(data=outData, status=status.HTTP_200_OK)
        else:
            return JsonResponse(
                data={"error": "METHOD NOT VALID!! SEND POST REQUEST"},
                status=status.HTTP_400_BAD_REQUEST,
            )
    # return Response(serializer.errors, status=400)


# request.POST.get("Nitrogen")
