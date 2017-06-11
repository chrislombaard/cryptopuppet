from django.conf.urls import url
from django.contrib.auth.decorators import login_required

from crumpet.backtests import views

urlpatterns = [
    url(
        r"^$",
        login_required(views.BacktestingView.as_view(
            template_name="backtests/backtesting.html"
        )),
        name="backtesting"
    ),
    url(
        r"^live/$",
        login_required(views.LiveTestView.as_view(
            template_name="backtests/livetest.html"
        )),
        name="livetest"
    ),
]
