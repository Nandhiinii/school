from rest_framework import serializers
from .models import ApplicationDetails,SubjectDetails

class ApplicationSerializer(serializers.ModelSerializer):
    
    parent_name = serializers.CharField(source='parent_detail.first_name', read_only=True)
    parent_mobile = serializers.CharField(source='parent_detail.mobile_number', read_only=True)

    class_name = serializers.CharField(source='class_detail.name', read_only=True)

    class Meta:
        model = ApplicationDetails
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubjectDetails
        fields = '__all__'