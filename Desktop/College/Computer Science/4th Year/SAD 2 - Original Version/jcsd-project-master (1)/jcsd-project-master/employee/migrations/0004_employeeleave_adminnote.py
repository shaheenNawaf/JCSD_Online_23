# Generated by Django 4.1.6 on 2023-11-07 04:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0003_alter_employeeleave_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='employeeleave',
            name='adminNote',
            field=models.CharField(default='', max_length=255),
        ),
    ]
