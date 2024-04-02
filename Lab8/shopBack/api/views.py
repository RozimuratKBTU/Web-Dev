from django.shortcuts import render
from .models import Product
from django.http.response import JsonResponse, HttpResponse
from django.db import  models


# Create your views here.



def all_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)



