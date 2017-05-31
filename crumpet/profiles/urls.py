from django.conf.urls import url

from . import views

urlpatterns = [
    url(
        r"^personal/$",
        views.PersonalProfileView.as_view(),
        name="personal-profile"
    ),
    url(
        r"^business/$",
        views.BusinessProfileView.as_view(),
        name="business-profile"
    ),
    url(
        r"^product/$",
        views.ProductProfileView.as_view(),
        name="product-profile"
    ),
    url(r'^partners/$',
        views.PartnerProfileListView.as_view(),
        name="partner-profile-list"
    ),
    url(r"^partners/(?P<slug>[-\w]+)/$",
        views.PartnerFormView.as_view(),
        name="partner-form"
        ),
    url(
        r"^(?P<slug>[-\w]+)/$",
        views.ProfileFormView.as_view(),
        name="profile-update"
    ),
    url(
        r"^(?P<slug>[-\w]+)(?:/(?P<form_number>[\w]+))$",
        views.ProfileFormView.as_view(),
        name="profile-update"
    )
]
