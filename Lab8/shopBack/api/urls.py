from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.all_products),
    path('products/<int:product_id>/', views.product, name='product'),
    path('categories/', views.all_categories, name='category'),
    path('categories/<int:category_id>/', views.category, name="categore"),
    path('categories/<int:id>/products/', views.products_by_category)
]


# /api/products - List of all Products
# /api/products/<int:id>/ - Get one Product
# /api/categories/ - List of all Categories
# /api/categories/<int:id>/ - Get one Category
# /api/categories/<int:id>/products/ - List of Products by Category