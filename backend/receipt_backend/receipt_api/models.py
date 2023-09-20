from django.db import models

# Create your models here.
class Receipt(models.Model):
    name = models.CharField(max_length=255)
    date = models.DateField()
    items = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    

    def __str__(self):
        return self.name
