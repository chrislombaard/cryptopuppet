from project.urls import *

if project.settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r"^django-toolbar/", include(debug_toolbar.urls)),
    ]
