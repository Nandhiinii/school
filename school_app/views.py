from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

def about_details(request):
    return render(request,'about-us.html')

def contact(request):
    return render(request,'contacts.html')

def gallery(request):
    return render(request,"gallery.html")

def faq(request):
    return render(request,"faq.html")

def programs(request):
    return render(request,"programs.html")