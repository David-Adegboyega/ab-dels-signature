import json

from django import forms
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from .models import QuoteRequest

MAX_BODY_BYTES = 10_000


class QuoteForm(forms.ModelForm):
    quantity = forms.IntegerField(min_value=1)

    class Meta:
        model = QuoteRequest
        fields = [
            'name', 'organisation', 'product', 'quantity',
            'deadline', 'location', 'details',
        ]


@csrf_exempt
@require_POST
def create_quote(request):
    if len(request.body) > MAX_BODY_BYTES:
        return JsonResponse({'error': 'Request too large.'}, status=413)

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON.'}, status=400)

    if not isinstance(data, dict):
        return JsonResponse({'error': 'Invalid data.'}, status=400)

    form = QuoteForm(data)
    if not form.is_valid():
        return JsonResponse({'errors': form.errors}, status=400)

    quote = form.save()
    return JsonResponse({'id': quote.id}, status=201)