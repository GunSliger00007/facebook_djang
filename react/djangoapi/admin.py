from django.contrib import admin
from .models import CustomUser, Friends, Groups, Notifications, Posts, Reels, Stories

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'birthday_day', 'birthday_month', 'birthday_year', 'gender', 'is_active', 'is_staff')

@admin.register(Friends)
class FriendsAdmin(admin.ModelAdmin):
    list_display = ('user_profile', 'name', 'online_small_image', 'message', 'message_time')

@admin.register(Groups)
class GroupsAdmin(admin.ModelAdmin):
    list_display = ('user_profile', 'group_name', 'group_image')

@admin.register(Notifications)
class NotificationsAdmin(admin.ModelAdmin):
    list_display = ('user_profile', 'name', 'notification_thumb', 'action', 'entity', 'time')

@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    list_display = ('user_profile', 'caption', 'commentator_name', 'comment', 'commented_time', 'total_comment', 'tagged_person', 'tagged_number', 'uploaded_time')

@admin.register(Reels)
class ReelsAdmin(admin.ModelAdmin):
    list_display = ('user_profile', 'thumbnail', 'views')

@admin.register(Stories)
class StoriesAdmin(admin.ModelAdmin):
    list_display = ('user_profile', 'name', 'story_thumbnail')
