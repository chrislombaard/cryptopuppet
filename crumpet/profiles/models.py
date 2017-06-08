from django.conf import settings
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

from crumpet.profiles import constants


@python_2_unicode_compatible
class UserAccount(models.Model):
    """User profile"""
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        related_name="user_account"
    )
    exchange = models.CharField(
        verbose_name="Crypto Exchanges",
        choices=constants.CRYPTO_EXCHANGES,
        default=constants.CRYPTO_EXCHANGES[0][0],
        max_length=30
    )
    api_key = models.CharField(max_length=255, blank=True)
    api_secret = models.CharField(max_length=255, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "User Account"

    def __str__(self):
        return u"%s %s" % (self.user.first_name, self.user.last_name)
