from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def test(request):
    print("asdf")
    form = request.POST

    return redirect("/", {'form' : form})