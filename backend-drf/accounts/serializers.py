from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerailizer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        # create = set the password in a plain text
        # create_user = set the password hash

        # user = User.objects.create_user(**validated_data)  #shorcart way
        
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )

        return user