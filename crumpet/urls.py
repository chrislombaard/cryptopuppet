from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from . import views

urlpatterns = [
    url(
        r"^account/$",
        login_required(views.AccountPageView.as_view(
            template_name="crumpet/account.html"
        )),
        name="account"
    ),
    url(
        r"^$",
        views.DashboardView.as_view(),
        name="dashboard"
    )
]
