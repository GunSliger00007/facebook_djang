# your_app_name/views.py
from rest_framework import generics, permissions,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *
from .serializers import *
import logging

logger = logging.getLogger(__name__)

class SignUpView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            user = serializer.save()
            return Response({'detail': 'Registration successful!', 'user_id': user.id}, status=status.HTTP_201_CREATED)
        except Exception as e:
            # Log the error for debugging purposes
            logger.error(f"Error during registration: {e}", exc_info=True)

            return Response({'detail': 'Registration failed. Please try again.'}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        user = CustomUser.objects.filter(email=email).first()

        if user is None or not user.check_password(password):
            return Response({'detail': 'Invalid credentials'}, status=401)

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })

class UserPostsView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Posts.objects.filter(user_profile=user)

class UserFriendsView(generics.ListAPIView):
    serializer_class=FriendsSerializer
    permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return Friends.objects.filter(user_profile=user)
    
class UserGroupView(generics.ListAPIView):
    serializer_class=GroupSerializer
    permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return Groups.objects.filter(user_profile=user)
    
class UserNotificationsView(generics.ListAPIView):
    serializer_class=GroupSerializer
    permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return Notifications.objects.filter(user_profile=user)

class UserReelsView(generics.ListAPIView):
    serializer_class=ReelsSerializer
    permission_classes=[permissions.IsAuthenticated]

    def get_queryset(self):
        user=self.request.user
        return Reels.objects.filter(user_profile=user)
    
class UserStoriesView(generics.ListAPIView):
    serializer_class=StoriesSerializer


    def get_queryset(self):
        user=self.request.user
        return Stories.objects.filter(user_profile=user)