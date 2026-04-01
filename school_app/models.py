from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):

    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('parent', 'Parent'),
    )

    mobile_number = models.CharField(max_length=15)
    place = models.CharField(max_length=150, null=True, blank=True)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return self.username
    

class SubjectDetails(models.Model):
    name = models.CharField(max_length=180, null=True, blank=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
class ApplicationDetails(models.Model):

    STATUS_CHOICES = (
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('pending', 'Pending'),
        ('Common','Common')
    )

    parent_detail = models.ForeignKey(
        CustomUser,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    class_detail = models.ForeignKey(
        SubjectDetails,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )
    enquired_details=models.TextField(null=True,blank=True)
    description = models.TextField(null=True, blank=True)

    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='Common'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.parent_detail} - {self.status}"