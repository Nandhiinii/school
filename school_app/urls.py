"""
URL configuration for school project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from school_app import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
   path('index',views.index,name='index'),
   path('about',views.about_details,name='about'),
   path('contact',views.contact,name='contact'),
   path('gallery',views.gallery,name='gallery'),
   path('faq',views.faq,name='faq'),
   path('programs',views.programs,name='programs'),
    path('api/admin-login/', views.admin_login),
    path('api/applications/', views.get_applications),
    path('api/update-status/', views.update_application_status),
    path('api/subjects/', views.get_subjects),                
    path('api/subjects/<int:id>/', views.get_subject),        
    path('api/subjects/create/', views.create_subject),       
    path('api/subjects/update/<int:id>/', views.update_subject), 
    path('api/subjects/delete/<int:id>/', views.delete_subject), 
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0])