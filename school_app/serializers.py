from rest_framework import serializers
from .models import ApplicationDetails,SubjectDetails

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationDetails
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectDetails
        fields = '__all__'