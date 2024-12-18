# serializers.py
from rest_framework import serializers


class FertilizerPredictSerializer(serializers.Serializer):
    cropname = serializers.CharField(max_length=100)
    nitrogen = serializers.IntegerField()
    phosphorous = serializers.IntegerField()
    pottassium = serializers.IntegerField()
