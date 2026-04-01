from django.shortcuts import render, redirect
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib import messages
from school_app.serializers import *


def index(request):
    return render(request,'index.html')

def about_details(request):
    return render(request,'about-us.html')

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        class_id = request.POST.get('class_id')
        message = request.POST.get('message')

        if not class_id:
            classes = SubjectDetails.objects.filter(status=True)
            return render(request, 'contacts.html', {
                'classes': classes,
                'error': 'Please select a class'
            })

        class_obj = SubjectDetails.objects.filter(id=class_id).first()

        user, created = CustomUser.objects.get_or_create(
            username=email,
            defaults={
                'email': email,
                'mobile_number': phone,
                'role': 'parent'
            }
        )

        user.first_name = name
        user.mobile_number = phone
        user.save()

        ApplicationDetails.objects.create(
            parent_detail=user,
            class_detail=class_obj,
            enquired_details=message,
            status='Common'
        )

        # ✅ SUCCESS MESSAGE
        messages.success(
            request,
            "Thank you for contacting us! Our team will get back to you as soon as possible."
        )

        return redirect('contact')  # stay on same page

    classes = SubjectDetails.objects.filter(status=True)
    return render(request, 'contacts.html', {'classes': classes})


def gallery(request):
    return render(request,"gallery.html")

def faq(request):
    return render(request,"faq.html")

def programs(request):
    return render(request,"programs.html")

#-------------------------------Mobile App APIs------------------------------#


@api_view(['POST'])
def admin_login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None and user.role == 'admin':
        return Response({
            'status': True,
            'message': 'Login successful',
            'user_id': user.id,
            'role': user.role
        })
    else:
        return Response({
            'status': False,
            'message': 'Invalid credentials or not admin'
        })
    
from .models import ApplicationDetails
from .serializers import ApplicationSerializer

@api_view(['GET'])
def get_applications(request):
    status = request.GET.get('status', 'Common')  

    applications = ApplicationDetails.objects.filter(status=status)

    serializer = ApplicationSerializer(applications, many=True)

    return Response({
        'status': True,
        'filter_status': status,
        'data': serializer.data
    })

@api_view(['POST'])
def update_application_status(request):
    app_id = request.data.get('id')
    print(app_id)
    new_status = request.data.get('status')

    try:
        app = ApplicationDetails.objects.get(id=app_id)
        print(app)
        app.status = new_status  # accepted / rejected / pending / anything
        app.save()

        return Response({
            'status': True,
            'message': 'Status updated successfully'
        })

    except ApplicationDetails.DoesNotExist:
        return Response({
            'status': False,
            'message': 'Application not found'
        })
    

@api_view(['POST'])
def create_subject(request):
    serializer = SubjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'status': True, 'data': serializer.data})
    return Response({'status': False, 'errors': serializer.errors})

@api_view(['GET'])
def get_subjects(request):
    subjects = SubjectDetails.objects.all()
    serializer = SubjectSerializer(subjects, many=True)
    return Response({'status': True, 'data': serializer.data})

@api_view(['GET'])
def get_subject(request, id):
    try:
        subject = SubjectDetails.objects.get(id=id)
    except SubjectDetails.DoesNotExist:
        return Response({'status': False, 'message': 'Not found'})

    serializer = SubjectSerializer(subject)
    return Response({'status': True, 'data': serializer.data})

@api_view(['PUT'])
def update_subject(request, id):
    try:
        subject = SubjectDetails.objects.get(id=id)
    except SubjectDetails.DoesNotExist:
        return Response({'status': False, 'message': 'Not found'})

    serializer = SubjectSerializer(subject, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'status': True, 'data': serializer.data})

    return Response({'status': False, 'errors': serializer.errors})

@api_view(['DELETE'])
def delete_subject(request, id):
    try:
        subject = SubjectDetails.objects.get(id=id)
    except SubjectDetails.DoesNotExist:
        return Response({'status': False, 'message': 'Not found'})

    subject.delete()
    return Response({'status': True, 'message': 'Deleted successfully'})