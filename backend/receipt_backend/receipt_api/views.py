from rest_framework import generics
from .models import Receipt
from .serializers import ReceiptSerializer

# Create your views here.
class ReceiptListCreateView(generics.ListCreateAPIView):
    queryset = Receipt.objects.all()
    serializer_class = ReceiptSerializer
