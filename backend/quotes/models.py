from django.db import models

class QuoteRequest(models.Model):
    name = models.CharField(max_length=100)
    organisation = models.CharField(max_length=100, blank=True)
    product = models.CharField(max_length=50)
    quantity = models.PositiveIntegerField()
    deadline = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=150)
    details = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    handled = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Quote Request from {self.name} for {self.product}"

