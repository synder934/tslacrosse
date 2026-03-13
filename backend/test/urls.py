from django.urls import path
from .views import HelloWorldView, MOTDView

urlpatterns = [
    path('hello/', HelloWorldView.as_view(), name='hello'),
    path('motd/', MOTDView.as_view(), name='motd'),
]
