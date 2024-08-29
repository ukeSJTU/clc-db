from rest_framework import serializers
from .models import Category, Chirality, Molecule


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]


class ChiralitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Chirality
        fields = ["name"]


class MoleculeSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)
    chirality = ChiralitySerializer(many=True, read_only=True)

    class Meta:
        model = Molecule
        fields = "__all__"
