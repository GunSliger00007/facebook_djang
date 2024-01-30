from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get('is_superuser') is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    birthday_day = models.IntegerField(null=True, blank=True)
    birthday_month = models.IntegerField(null=True, blank=True)
    birthday_year = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email

class Friends(models.Model):
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='friends')
    name = models.CharField(max_length=255)
    online_small_image = models.ImageField(upload_to='images/')
    message = models.TextField()
    message_time = models.CharField(max_length=10)

    def __str__(self):
        return self.name

class Groups(models.Model):
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='user_groups')
    group_name = models.CharField(max_length=255)
    group_image = models.CharField(max_length=255)

    def __str__(self):
        return self.group_name

class Notifications(models.Model):
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='notifications')
    name = models.CharField(max_length=255)
    notification_thumb = models.ImageField(upload_to='notification_thumbs/')
    action = models.CharField(max_length=255)
    entity = models.CharField(max_length=255, blank=True, null=True)
    time = models.CharField(max_length=255)
    icon_style = models.JSONField()

    def __str__(self):
        return f"{self.name} - {self.action}"

class Posts(models.Model):
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='posts')
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    caption = models.TextField()
    likers = models.ManyToManyField(Friends, related_name='liked_posts')
    commentator_small_image = models.ImageField(upload_to='commentator_small_images/', null=True, blank=True)
    commentator_name = models.CharField(max_length=255)
    comment = models.TextField()
    commented_time = models.CharField(max_length=10)
    total_comment = models.IntegerField()
    tagged_person = models.CharField(max_length=255, blank=True, null=True)
    tagged_number = models.IntegerField(blank=True, null=True)
    uploaded_time = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.caption}"

class Reels(models.Model):
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='reels')
    thumbnail = models.ImageField(upload_to='reel_thumbnails/')
    views = models.CharField(max_length=10)

    def __str__(self):
        return f"Reel {self.id} - {self.views}"

class Stories(models.Model):
    user_profile = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='stories')
    name = models.CharField(max_length=255)
    story_thumbnail = models.ImageField(upload_to='story_thumbnails/')

    def __str__(self):
        return f"Story {self.id} - {self.name}"
