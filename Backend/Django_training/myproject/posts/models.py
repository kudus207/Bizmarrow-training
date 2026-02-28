from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=75)
    body = models.TextField()
    slug = models.SlugField()
    date = models.DateTimeField(auto_now_add=True)
    banner = models.ImageField(default='fallback.png', blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    
    # author = models.ForeignKey(
    #     User,
    #     on_delete=models.CASCADE,
    #     null=True,
    #     blank=True
    # ) #This allows old posts to exist without author.
    
    # By default a ForeignKey is null=False
    #That means: Every post MUST have an author.
    # But…
    # You already have posts in your database.
    # Those old posts do NOT have an author value.
    # So when Django tries to apply the migration, SQLite says:
    # “You are adding a required field, but existing rows have no value. I refuse.”
    # That’s why migration fails.
    
    # Whenever you add a non-nullable field to a model that already has data, you must either:
    # Give it a default
    # Allow null temporarily
    # Delete old data
    
    # After Migration Succeeds
    # Now you have:
    # Old posts → author = NULL
    # New posts → you can assign author
    
    # Later, when you're ready, you can:
    # Assign authors to all existing posts
    # Remove null=True
    # Make it required
        
    
    def __str__(self):
        return self.title
    
   