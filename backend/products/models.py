from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    price = models.PositiveIntegerField()
    featured = models.BooleanField(default=False)
    sizes = models.JSONField(default=list, blank=True)
    colours = models.JSONField(default=list, blank=True)

    def __str__(self):
        return self.name