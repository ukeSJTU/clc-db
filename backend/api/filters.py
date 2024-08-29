import django_filters
from django.db.models import Q
from core.models import Molecule
from rdkit import Chem
from rdkit.Chem import rdchem, AllChem


# support for filtering with django_filters
class MoleculeFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(field_name="name", lookup_expr="icontains")
    cas_id = django_filters.CharFilter(
        field_name="cas_id", method="filter_cas_ids_starts_with"
    )
    smiles = django_filters.CharFilter(field_name="smiles", method="smiles_search")
    category = django_filters.CharFilter(
        field_name="category__name", lookup_expr="iexact"
    )

    class Meta:
        model = Molecule
        fields = ["name", "cas_id", "smiles", "category"]

    def filter_cas_ids(self, queryset, name, value):
        cas_ids = [cas_id.strip() for cas_id in value.split(",")]
        return queryset.filter(cas_id__in=cas_ids)

    def filter_cas_ids_starts_with(self, queryset, name, value):
        # Split the cas_id parameter by commas to support multiple starts with searches
        cas_id_prefixes = value.split(",")
        queries = [Q(cas_id__startswith=cas_id.strip()) for cas_id in cas_id_prefixes]
        query = queries.pop()
        for item in queries:
            query |= item  # OR the queries together
        return queryset.filter(query)

    def smiles_search(self, queryset, name, value):
        # Convert the input SMILES string to an RDKit molecule
        query_mol = Chem.MolFromSmiles(value)
        if query_mol is None:
            return queryset.none()  # If invalid SMILES, return no results

        # Filter molecules by SMILES using RDKit substructure search
        matching_ids = []
        for molecule in queryset:
            db_mol = Chem.MolFromSmiles(molecule.smiles)
            if db_mol is not None and db_mol.HasSubstructMatch(query_mol):
                matching_ids.append(molecule.id)

        # Return the queryset of molecules that match the substructure search
        return queryset.filter(id__in=matching_ids)
