from django.shortcuts import render,redirect
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'frontend/index.html')
