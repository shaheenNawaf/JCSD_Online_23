# Generated by Django 4.1.6 on 2023-11-06 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0015_remove_profile_profiletype_profile_emailaddress_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='profileType',
            field=models.CharField(choices=[('EMP', 'employee'), ('USER', 'user')], default='USER', max_length=100),
        ),
    ]
