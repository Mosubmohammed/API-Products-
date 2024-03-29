
from django.urls import path
from django.conf.urls.static import static
from SDKApi import settings
from .views import *


urlpatterns = [
    path('productsss/',ProductView.as_view(),name='product'),
    path('products/<int:pk>',ProductDetailView.as_view(),name='products'),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)