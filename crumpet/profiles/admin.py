from django.contrib import admin

from crumpet.profiles import models


class UserAccountAdmin(admin.ModelAdmin):
    model = models.UserAccount
    list_display = [
        "exchange", "created", "updated"
    ]

admin.site.register(models.UserAccount, UserAccountAdmin)
