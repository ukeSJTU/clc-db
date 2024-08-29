from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()

router.register(r"overview/card", OverviewViewSet, basename="overview-card")
router.register(r"overview/table", OverviewViewSet, basename="overview-table")

router.register(r"download/molecules", DownloadViewSet, basename="molecule")
router.register(r"download/categories", DownloadViewSet, basename="class")

router.register(r"search/molecules", SearchViewSet, basename="search")

router.register(r"statistics", StatisticsViewSet, basename="statistics")
router.register(r"stats/weights", WeightDistributionViewSet, basename="stats-weights")
router.register(
    r"stats/chirality", ChiralityDistributionViewSet, basename="stats-chirality"
)
router.register(
    r"stats/category", CategoryDistributionViewSet, basename="stats-category"
)
router.register(r"categories", CategoryViewSet, basename="category")

router.register(r"cluster/upload/sdf", SDFUploaderViewSet, basename="upload-sdf")
router.register(r"cluster/process", ClusteringViewSet, basename="cluster")

urlpatterns = [
    path("", include(router.urls)),
]
