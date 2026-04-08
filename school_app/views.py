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

from django.shortcuts import render, redirect
from django.contrib import messages
from datetime import datetime
from .models import SubjectDetails, ApplicationDetails, CustomUser


def contact(request):
    if request.method == "POST":
        parent_name = request.POST.get('parent_name')
        mobile = request.POST.get('mobile')
        child_name = request.POST.get('child_name')
        dob = request.POST.get('dob')
        class_id = request.POST.get('class_interested')
        admission_needed = request.POST.get('admission_needed')
        location = request.POST.get('location')
        consent = request.POST.get('consent')

        # ✅ Validation
        if not parent_name or not mobile:
            messages.error(request, "Parent name and mobile are required")
            return redirect('contact')

        if not class_id:
            messages.error(request, "Please select a class")
            return redirect('contact')

        if not consent:
            messages.error(request, "Please accept consent")
            return redirect('contact')

        # ✅ Convert DOB safely
        dob_obj = None
        if dob:
            try:
                dob_obj = datetime.strptime(dob, "%Y-%m-%d").date()
            except ValueError:
                messages.error(request, "Invalid date format")
                return redirect('contact')

        # ✅ Get class safely
        class_obj = SubjectDetails.objects.filter(id=class_id).first()
        if not class_obj:
            messages.error(request, "Invalid class selected")
            return redirect('contact')

        # ✅ Create / Get User
        user, created = CustomUser.objects.get_or_create(
            username=mobile,
            defaults={
                'mobile_number': mobile,
                'role': 'parent'
            }
        )

        user.first_name = parent_name
        user.mobile_number = mobile
        user.save()

        # ✅ Save Application (based on your model structure)
        ApplicationDetails.objects.create(
            parent_detail=user,
            class_detail=class_obj,
            child_name=child_name if hasattr(ApplicationDetails, 'child_name') else None,
            dob=dob_obj if hasattr(ApplicationDetails, 'dob') else None,
            admission_needed=admission_needed if hasattr(ApplicationDetails, 'admission_needed') else None,
            location=location if hasattr(ApplicationDetails, 'location') else None,
            consent=True if consent else False if hasattr(ApplicationDetails, 'consent') else None,
            enquired_details=f"""
Child Name: {child_name}
DOB: {dob}
Admission Needed: {admission_needed}
Location: {location}
""",
            description=f"LMPS Admission Enquiry - {parent_name}",
            status='Common'
        )

        messages.success(
            request,
            "Thank you! Our admission team will contact you shortly."
        )

        return redirect('contact')

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

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ApplicationDetails




from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ApplicationDetails


@api_view(['POST'])
def update_application_status(request):
    app_id = request.data.get('id')
    new_status = request.data.get('status')
    description = request.data.get('description')

    # ✅ Validate ID
    if not app_id:
        return Response({
            'status': False,
            'message': 'Application ID is required'
        })

    try:
        app = ApplicationDetails.objects.get(id=app_id)

        # 🔍 Debug logs (optional)
        print("Incoming status:", new_status)
        print("Before update:", app.status)

        # ✅ Valid status values (DB values, not display)
        valid_status = ['approved', 'rejected', 'pending', 'common']

        # ✅ Fix status (handle case issues like "Rejected")
        if new_status is not None:
            new_status = new_status.strip().lower()

            if new_status not in valid_status:
                return Response({
                    'status': False,
                    'message': f'Invalid status: {new_status}'
                })

            app.status = new_status

        # ✅ Update description (allow empty also)
        if description is not None:
            app.description = description

        app.save()

        # 🔍 Debug after save
        print("After update:", app.status)

        return Response({
            'status': True,
            'message': 'Status and description updated successfully',
            'data': {
                'id': app.id,
                'status': app.status,
                'description': app.description
            }
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