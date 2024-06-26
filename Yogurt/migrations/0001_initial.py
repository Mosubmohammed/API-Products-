# Generated by Django 5.0.3 on 2024-03-27 20:30

import Yogurt.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('price', models.FloatField(max_length=10)),
                ('description', models.TextField()),
                ('images', models.ImageField(upload_to=Yogurt.models.upload_to)),
            ],
        ),
    ]
