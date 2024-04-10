from django.shortcuts import render
from .models import *
from django.http.response import JsonResponse, HttpResponse
from django.db import  models


# Create your views here.



def all_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product(request, product_id):
    try:
        p = Product.objects.get(id=product_id)
    except Product.DoesNotExist as error:
        return JsonResponse({f'message: {error}'})

    return JsonResponse(p.to_json(), safe=False)

def all_categories(request):
    categories = Category.objects.all()
    categories_json = [ x.to_json() for x in categories]
    return JsonResponse(categories_json, safe=False)


def category(request, category_id):
    try:
        c = Category.objects.get(id = category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({f'message: {e}'})
    return JsonResponse(c.to_json(), safe=False)

def products_by_category(request, category_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products if p.category.id == category_id]
    return JsonResponse(products_json,safe=False)