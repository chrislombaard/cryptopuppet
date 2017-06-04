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
        r"^portfolio/$",
        login_required(views.PortfolioView.as_view(
            template_name="crumpet/portfolio.html"
        )),
        name="portfolio"
    ),
    url(
        r"^backtesting/$",
        login_required(views.BacktestingView.as_view(
            template_name="crumpet/backtesting.html"
        )),
        name="backtesting"
    ),
    url(
        r"^$",
        views.DashboardView.as_view(),
        name="dashboard"
    )
]
