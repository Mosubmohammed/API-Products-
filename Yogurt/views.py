from django.shortcuts import render
from rest_framework import generics,status
from Yogurt.serializer import *
from rest_framework.response import Response
# from rest_framework import APIView
from .models import *

# Create your views here.

class ProductView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer