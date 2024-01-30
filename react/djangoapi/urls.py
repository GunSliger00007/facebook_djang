# your_app_name/urls.py
from django.urls import path
from .views import *

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', LoginView.as_view(), name='login'),
    path('user-posts/', UserPostsView.as_view(), name='user-posts'),
    path('user-friends/',UserFriendsView.as_view(),name='user-friends'),
    path('user-groups/',UserGroupView.as_view(),name='user-groups'),
    path('user-notifications/',UserNotificationsView.as_view(),name='user-notifications'),
    path('user-Reels/',UserReelsView.as_view(),name='user-reels'),
    path('user-stories/',UserStoriesView.as_view(),name='user-stories')
]
