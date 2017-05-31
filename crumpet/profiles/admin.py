from django.contrib import admin, messages
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse_lazy
from django.forms.models import BaseInlineFormSet
from django.utils.html import format_html


# UNUSED_MODEL_BASE_FIELDS = [
#     "state", "publish_on", "retract_on", "subtitle", "created",
#     "modified", "owner", "owner_override", "content_type", "class_name",
#     "categories", "primary_category", "tags", "sites", "layers",
#     "comments_enabled", "anonymous_comments", "comments_closed",
#     "likes_enabled", "anonymous_likes", "likes_closed", "comment_count",
#     "vote_total"
# ]
from crumpet.profiles import models


class UserProfileAdmin(admin.ModelAdmin):
    model = models.UserProfile
    list_display = [
        "name", "user", "location", "image",
        "platform_category", "gender", "race", "contact_number",
        "work_experience", "fields_to_certify", "public_link"
    ]
    list_filter = ("platform_category", "gender", "race")
    search_fields = [
        "user__first_name", "user__last_name", "location__title",
        "id_number", "contact_number"
    ]
    # exclude = UNUSED_MODEL_BASE_FIELDS

    @staticmethod
    def name(obj):
        try:
            result = "{} {}".format(obj.user.first_name, obj.user.last_name)
        except Exception as e:
            result = e.message

        return result

    def get_queryset(self, request):
        """
        The purpose of this function is to make the request available to the
        admin model by storing it in the instance.
        """
        self.request = request
        return super(UserProfileAdmin, self).get_queryset(request)

    def public_link(self, obj):
        unsigned_url = self.request.build_absolute_uri(
            reverse("public:user", args=[obj.id])
        )
        signed_url = sign_url(unsigned_url)
        return format_html("<a href='{url}'>Public Link</a>", url=signed_url)


class TagInlineFormset(BaseInlineFormSet):
    """
    This formset should be used by all xxxTagInlineAdmin classes.
    Blank values in the custom_value fields create uniqueness constraint
    errors, so we set it to None, which does not have the same problem.
    The TagMixin class has a `clean()` method that does a similar thing at
    the model level.
    """

    def clean(self):
        for form in self.forms:
            if "custom_value" in form.cleaned_data:
                if not form.cleaned_data["custom_value"]:
                    form.cleaned_data["custom_value"] = None
        super(TagInlineFormset, self).clean()


class BusinessProfileTechnologyTagInlineAdmin(admin.TabularInline):
    model = models.BusinessTechnologyTag
    formset = TagInlineFormset
    extra = 0


class BusinessProfileIndustryTagInlineAdmin(admin.TabularInline):
    model = models.BusinessIndustryTag
    formset = TagInlineFormset
    extra = 0


class BusinessLocationInlineAdmin(admin.TabularInline):
    model = models.BusinessLocation
    extra = 0


class BusinessDocumentInlineAdmin(admin.TabularInline):
    model = models.BusinessDocument
    extra = 0


class ProductProfileInlineAdmin(admin.TabularInline):
    model = models.ProductProfile
    # Django said: "'profiles.ProductProfile' has more than one ForeignKey to
    # 'profiles.BusinessProfile'". We disambiguate by explicilty specifying
    # the name of the field to join on.
    fk_name = "business"
    extra = 0
    fields = ["title"]
    show_change_link = True


class BusinessImageInlineAdmin(admin.TabularInline):
    model = ModelBaseImage
    extra = 0


class BusinessMemberInlineAdmin(admin.TabularInline):
    model = models.BusinessMember
    extra = 0


class BusinessProfileAdmin(ProfileWithCertificationAdmin):
    model = models.BusinessProfile
    list_display = [
        "title", "name", "registration_number", "website",
        "staging_wizard_stage", "stage",
        "fields_to_certify", "requires_admin_action",
        "public_link"
    ]
    search_fields = ["title", "registration_number"]
    list_editable = [
        "stage"
    ]
    list_filter = ("stage",)
    inlines = [
        BusinessProfileTechnologyTagInlineAdmin,
        BusinessProfileIndustryTagInlineAdmin,
        BusinessLocationInlineAdmin,
        BusinessUserInlineAdmin,
        ProductProfileInlineAdmin,
        BusinessDocumentInlineAdmin,
        BusinessImageInlineAdmin,
        BusinessMemberInlineAdmin
    ]
    exclude = UNUSED_MODEL_BASE_FIELDS

    @staticmethod
    def name(obj):
        # TODO: Post MVP Support multiple associations
        try:
            first_user = obj.users.first()
            result = "{} {}".format(
                first_user.user.first_name,
                first_user.user.last_name
            )
        except Exception as e:
            result = e.message

        return result

    def get_queryset(self, request):
        """
        The purpose of this function is to make the request available to the
        admin model by storing it in the instance.
        """
        self.request = request
        return super(BusinessProfileAdmin, self).get_queryset(request)

    def public_link(self, obj):
        unsigned_url = self.request.build_absolute_uri(
            reverse("public:business", args=[obj.id])
        )
        signed_url = sign_url(unsigned_url)
        return format_html("<a href='{url}'>Public Link</a>", url=signed_url)


class ProductProfileTechnologyTagInlineAdmin(admin.TabularInline):
    model = models.ProductTechnologyTag
    formset = TagInlineFormset
    extra = 0


class ProductProfileIndustryTagInlineAdmin(admin.TabularInline):
    model = models.ProductIndustryTag
    formset = TagInlineFormset
    extra = 0


class ProductProfileTechStackTagInlineAdmin(admin.TabularInline):
    model = models.ProductTechStackTag
    formset = TagInlineFormset
    extra = 0


class ProductDocumentInlineAdmin(admin.TabularInline):
    model = models.ProductDocument
    extra = 0


class ProductImageInlineAdmin(admin.TabularInline):
    model = ModelBaseImage
    extra = 0


class ProductProfileAdmin(ProfileWithCertificationAdmin):
    model = models.ProductProfile
    list_display = [
        "title", "business", "fields_to_certify", "public_link"
    ]
    search_fields = ["title", "business__title"]
    inlines = [
        ProductProfileTechnologyTagInlineAdmin,
        ProductProfileIndustryTagInlineAdmin,
        ProductProfileTechStackTagInlineAdmin,
        ProductImageInlineAdmin,
        ProductDocumentInlineAdmin,
    ]
    exclude = UNUSED_MODEL_BASE_FIELDS

    def get_queryset(self, request):
        """
        The purpose of this function is to make the request available to the
        admin model by storing it in the instance.
        """
        self.request = request
        return super(ProductProfileAdmin, self).get_queryset(request)

    def public_link(self, obj):
        unsigned_url = self.request.build_absolute_uri(
            reverse("public:product", args=[obj.id])
        )
        signed_url = sign_url(unsigned_url)
        return format_html("<a href='{url}'>Public Link</a>", url=signed_url)


class BusinessIndustryTagAdmin(admin.ModelAdmin):
    model = models.BusinessIndustryTag
    list_display = [
        "business", "tag", "custom_value"
    ]
    list_filter = [
        "business", "tag"
    ]
    search_fields = [
        "business__title", "tag__title", "custom_value"
    ]


class BusinessTechnologyTagAdmin(admin.ModelAdmin):
    model = models.BusinessTechnologyTag
    list_display = [
        "business", "tag", "custom_value"
    ]
    list_filter = [
        "business", "tag"
    ]
    search_fields = [
        "business__title", "tag__title", "custom_value"
    ]


class ProductTechStackTagAdmin(admin.ModelAdmin):
    model = models.ProductTechStackTag
    list_display = [
        "product", "tag", "custom_value"
    ]
    list_filter = [
        "product", "tag"
    ]
    search_fields = [
        "product__title", "tag__title", "custom_value"
    ]


class ProductIndustryTagAdmin(admin.ModelAdmin):
    model = models.ProductIndustryTag
    list_display = [
        "product", "tag", "custom_value"
    ]
    list_filter = [
        "product", "tag"
    ]
    search_fields = [
        "product__title", "tag__title", "custom_value"
    ]


class ProductTechnologyTagAdmin(admin.ModelAdmin):
    model = models.ProductTechnologyTag
    list_display = [
        "product", "tag", "custom_value"
    ]
    list_filter = [
        "product", "tag"
    ]
    search_fields = [
        "product__title", "tag__title", "custom_value"
    ]


class FieldSetupAdmin(admin.ModelAdmin):
    model = models.FieldSetup
    list_display = [
        "field", "requires_certification", "mandatory_field",
        "private_field", "save_target_content_type",
        "save_target_field_name", "stage_requirement"

    ]
    list_editable = [
        "requires_certification", "mandatory_field",
        "stage_requirement"
    ]


class CertificationAdmin(admin.ModelAdmin):
    model = models.Certification
    list_display = [
        "form_field", "value", "date_updated", "name", "user",
        "certified"
    ]
    list_editable = [
        "certified"
    ]
    list_filter = ("certified", "form_field", "user__first_name", "user__last_name")
    search_fields = ["user__first_name", "user__last_name", "form_field"]

    def save_model(self, request, obj, form, change):

        created = False
        if hasattr(obj, "form_field") and hasattr(obj.form_field, "setup"):
            field_setup = obj.form_field.setup
            if (obj.certified and field_setup.save_target_content_type and
                    field_setup.save_target_field_name):
                klass = field_setup.save_target_content_type.model_class()
                default_kwargs = {
                    obj.form_field.setup.save_target_field_name: obj.value
                }
                if klass is User:
                    _, created = klass.objects.update_or_create(
                        id=obj.user.id,
                        defaults=default_kwargs
                    )
                elif klass is models.UserProfile:
                    _, created = klass.objects.update_or_create(
                        user__id=obj.user.id,
                        defaults=default_kwargs
                    )
                elif klass is models.BusinessProfile:
                    _, created = klass.objects.update_or_create(
                        users__user__id=obj.user.id,
                        defaults=default_kwargs
                    )
                elif klass is models.ProductProfile:
                    # TODO: Post MVP Support multiple associations
                    business_user = models.BusinessUser.objects.filter(
                        user__user__id=obj.user.id
                    ).first()
                    _, created = klass.objects.update_or_create(
                        business=business_user.business,
                        defaults=default_kwargs
                    )
                elif klass is models.BusinessDocument:
                    # TODO: Post MVP Support multiple associations
                    business_user = models.BusinessUser.objects.filter(
                        user__user__id=obj.user.id
                    ).first()
                    _, created = klass.objects.update_or_create(
                        business=business_user.business,
                        document_type=obj.form_field.setup.save_target_field_name,
                        defaults={"certified": True}
                    )
                elif klass is models.ProductDocument:
                    # TODO: Post MVP Support multiple associations
                    business_user = models.BusinessUser.objects.filter(
                        user__user__id=obj.user.id
                    ).first()
                    _, created = klass.objects.update_or_create(
                        product=business_user.business.product,
                        document_type=obj.form_field.setup.save_target_field_name,
                        defaults={"certified": True}
                    )
                else:
                    messages.add_message(
                        request,
                        messages.ERROR,
                        """
                        Please use a save_target_type (FieldSetup) of either:
                        user, UserProfile, BusinessProfile, ProductProfile,
                        BusinessDocument or ProductDocument
                         models
                        """
                    )
                    return super(CertificationAdmin, self).save_model(request, obj, form, change)

                try:
                    last_entry = models.Certification.objects.get(
                        user=obj.user,
                        form_field=obj.form_field,
                        certified=obj.certified
                    )
                    last_entry.delete()
                    messages.add_message(
                        request,
                        messages.INFO,
                        "1 certification entry (%s) was removed" % obj.form_field
                    )
                except models.Certification.DoesNotExist:
                    pass
        else:
            messages.add_message(
                request,
                messages.ERROR,
                "Please assign a FieldSetup for the following field, %s" % obj.form_field
            )
        if created:
            messages.add_message(
                request,
                messages.INFO,
                "A new object was created for the %s" % obj.form_field
            )
        super(CertificationAdmin, self).save_model(request, obj, form, change)

    @staticmethod
    def name(obj):
        try:
            result = "{} {}".format(obj.user.first_name, obj.user.last_name)
        except Exception as e:
            result = e.message

        return result


class FormSetupAdmin(admin.ModelAdmin):
    model = models.Certification
    list_display = [
        "title", "form", "subtitle", "profile", "order"
    ]
    ordering = ("profile", "order", )
    list_filter = ("profile", )


class BusinessDocumentAdmin(admin.ModelAdmin):
    model = models.BusinessDocument
    list_display = [
        "business", "document_type", "certified", "file_name", "file"
    ]
    list_filter = [
        "document_type", "certified"
    ]
    search_fields = [
        "business__title", "document_type", "file_name"
    ]


class ProductDocumentAdmin(admin.ModelAdmin):
    model = models.ProductDocument
    list_display = [
        "product", "document_type", "certified", "file_name", "file"
    ]
    list_filter = [
        "document_type", "certified"
    ]
    search_fields = [
        "product__title", "document_type", "file_name"
    ]


class PartnerImageInlineAdmin(admin.TabularInline):
    model = ModelBaseImage
    extra = 0


class PartnerProfileAdmin(admin.ModelAdmin):
    model = models.PartnerProfile
    list_display = [
        "title", "email", "website"
    ]
    search_fields = [
        "title", "email", "website", "services"
    ]
    exclude = UNUSED_MODEL_BASE_FIELDS
    inlines = [PartnerImageInlineAdmin]


class PartnerLeadAdmin(admin.ModelAdmin):
    model = models.PartnerLead
    list_display = [
        "date_added", "partner", "user", "first_name", "last_name",
        "email", "contact_number"
    ]
    date_hierarchy = "date_added"


admin.site.register(models.Certification, CertificationAdmin)
admin.site.register(models.FieldSetup, FieldSetupAdmin)
admin.site.register(models.FormSetup, FormSetupAdmin)
admin.site.register(models.UserProfile, UserProfileAdmin)
admin.site.register(models.BusinessProfile, BusinessProfileAdmin)
admin.site.register(models.ProductProfile, ProductProfileAdmin)
admin.site.register(models.IndustryTag)
admin.site.register(models.TechnologyTag)
admin.site.register(models.TechStackTag)
admin.site.register(models.BusinessDocument, BusinessDocumentAdmin)
admin.site.register(models.ProductDocument, ProductDocumentAdmin)
admin.site.register(models.BusinessIndustryTag, BusinessIndustryTagAdmin)
admin.site.register(models.BusinessTechnologyTag, BusinessTechnologyTagAdmin)
admin.site.register(models.ProductTechStackTag, ProductTechStackTagAdmin)
admin.site.register(models.ProductIndustryTag, ProductIndustryTagAdmin)
admin.site.register(models.ProductTechnologyTag, ProductTechnologyTagAdmin)
admin.site.register(models.PartnerProfile, PartnerProfileAdmin)
admin.site.register(models.PartnerLead, PartnerLeadAdmin)
