
from rest_framework import serializers
from .models import CustomUser,Posts,Friends,Groups,Notifications,Reels,Stories

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'birthday_day', 'birthday_month', 'birthday_year', 'gender')

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'password', 'first_name', 'last_name', 'birthday_day', 'birthday_month', 'birthday_year', 'gender')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        return user


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__'

class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        models=Friends
        fields='__all__'

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        models=Groups
        fields='__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        models=Notifications
        fields='__all__'

class ReelsSerializer(serializers.ModelSerializer):
    class Meta:
        models=Reels
        fields='__all__'

class StoriesSerializer(serializers.ModelSerializer):
    class Meta:
        models=Stories
        fields='__all__'