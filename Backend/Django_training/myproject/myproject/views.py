#from django.http import HttpResponse
from django.shortcuts import render


def homepage(request):
   # return HttpResponse('Hello Kudus! Welcome Home')
  return render(request, 'home.html')

def about(request):
    # return HttpResponse('This is My About Page!')
  return render(request, 'about.html')
