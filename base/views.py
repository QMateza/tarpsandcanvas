
from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages

def home(request):
  return render(request, 'home.html')

def about(request):
  return render(request, 'about.html')

def products(request):
  return render(request, 'products.html')

def contact(request):
  if request.method == "POST":
    name = request.POST['full_name']
    email = request.POST['email']
    phone = request.POST['phoneBox']
    subject = request.POST['subject']
    message = request.POST['message']

    #send an email
    send_mail(
      subject=subject, message=message, from_email=email, recipient_list=['qmateza@gmail.com'],
    )
    messages.success(request, "Email sent successfully")
    return render(request, 'contact.html', {'name':name})
  else:
    return render(request, 'contact.html')