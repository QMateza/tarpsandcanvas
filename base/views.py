from django.shortcuts import render

def home(requests):
  return render(requests, 'home.html')

def about(requests):
  return render(requests, 'about.html')

def products(requests):
  return render(requests, 'products.html')

def contact(requests):
  return render(requests, 'contact.html')