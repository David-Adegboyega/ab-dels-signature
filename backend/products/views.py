from django.http import JsonResponse

from .models import Product


def product_list(request):
    products = list(
        Product.objects.values(
            'id', 'name', 'category', 'price', 'featured', 'sizes', 'colours'
        )
    )
    return JsonResponse(products, safe=False)