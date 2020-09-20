from rest_framework import viewsets
from articles.models import Articles
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Articles.objects.all()



# from rest_framework.generics import (
#     ListAPIView, 
#     RetrieveAPIView,
#     CreateAPIView,
#     DestroyAPIView,
#     UpdateAPIView
# )
# from articles.models import Articles
# from .serializers import ArticleSerializer


# class ArticleListView(ListAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDetailView(RetrieveAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleCreateView(CreateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleUpdateView(UpdateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticleSerializer


# class ArticleDestroyView(DestroyAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticleSerializer

