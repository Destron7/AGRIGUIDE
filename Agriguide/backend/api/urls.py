from django.urls import path
from . import views

urlpatterns = [
    path("crop/", views.crop_view, name="crop"),
    path("fertilizer/", views.fertilizer_view, name="fertilizer"),
]
