from django.test import TestCase

from .models import Product


class ProductListTests(TestCase):
    def setUp(self):
        Product.objects.create(
            name='Mug', category='Souvenirs', price=13000, featured=True
        )

    def test_returns_products_as_json(self):
        response = self.client.get('/api/products/')
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]['name'], 'Mug')
        self.assertEqual(data[0]['price'], 13000)