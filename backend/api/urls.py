from django.urls import path, include
from rest_framework_simplejwt.views import TokenVerifyView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('auth/', include("authentication.urls")),
    path('test/', include("test.urls"))
]
