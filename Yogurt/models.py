from django.db import models

# Create your models here.

def upload_to(self,filename):
    return 'images/{filename}'.format(filename=filename)

class Product(models.Model):
    name=models.CharField(max_length=50)
    price=models.FloatField(max_length=10)
    description=models.TextField()
    images=models.ImageField(upload_to=upload_to)
    def __str__(self):
        return self.name