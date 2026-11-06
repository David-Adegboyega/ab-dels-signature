import json

from django.test import TestCase

from .models import QuoteRequest

VALID = {
    'name': 'Test Church',
    'organisation': 'Grace Chapel',
    'product': 'Clothing',
    'quantity': '50',
    'deadline': '',
    'location': 'Lagos',
    'details': 'Matching T-shirts',
}


class CreateQuoteTests(TestCase):
    def post(self, data):
        return self.client.post(
            '/api/quotes/', json.dumps(data), content_type='application/json'
        )

    def test_valid_request_is_saved(self):
        response = self.post(VALID)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(QuoteRequest.objects.count(), 1)

    def test_quantity_zero_is_rejected(self):
        response = self.post({**VALID, 'quantity': '0'})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(QuoteRequest.objects.count(), 0)

    def test_missing_name_is_rejected(self):
        response = self.post({**VALID, 'name': ''})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(QuoteRequest.objects.count(), 0)

    def test_get_is_not_allowed(self):
        response = self.client.get('/api/quotes/')
        self.assertEqual(response.status_code, 405)