from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from . import views

urlpatterns = [
    url(
        r"^account/$",
        login_required(views.AccountPageView.as_view(
            template_name="crumpet/pages/account.html"
        )),
        name="account"
    ),
    url(
        r"^portfolio/$",
        login_required(views.PortfolioView.as_view(
            template_name="crumpet/pages/portfolio.html"
        )),
        name="portfolio"
    ),
    url(
        r"^$",
        views.DashboardView.as_view(),
        name="dashboard"
    )
]
