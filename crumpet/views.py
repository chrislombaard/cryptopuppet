from django.shortcuts import redirect
from django.urls import reverse
from django.views.generic import TemplateView


class DashboardView(TemplateView):
    template_name = "crumpet/dashboard.html"

    def get(self, request, *args, **kwargs):
        context = self.get_context_data(**kwargs)

        if not request.user.is_authenticated():
            return redirect(reverse('account_login'))

        return self.render_to_response(context)


class AccountPageView(TemplateView):
    template_name = "crumpet/account.html"

