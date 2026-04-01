from django.contrib import admin

# Register your models here.
from school_app.models import *

admin.site.register(CustomUser)
admin.site.register(SubjectDetails)
admin.site.register(ApplicationDetails)