import os
import numpy as np
from e3fp.pipeline import fprints_from_sdf, mol_from_sdf
from rdkit import Chem
from rdkit.Chem import AllChem
from .embedding import embedding, cluster


def perform_clustering(
    saved_folder,
    descriptor,
    bits,
    radius,
    rdkit_inv,
    rdkit_radius,
    rdkit_use_features,
    rdkit_use_bond_types,
    rdkit_use_chirality,
    reduction_method,
    cluster_method,
    clusters,
    knn_algro,
    eps,
    min_samples,
):
    fprint_list = []
    id_list = []
    for file_name in os.listdir(saved_folder):
        file_path = os.path.join(saved_folder, file_name)
        if os.path.isfile(file_path) and file_name.endswith(".sdf"):
            try:
                mol = mol_from_sdf(file_path)
                if descriptor == "E3FP":
                    fprint = fprints_from_sdf(
                        file_path,
                        fprint_params={
                            "bits": bits,
                            "radius_multiplier": radius,
                            "rdkit_invariants": rdkit_inv,
                        },
                    )
                    vector = fprint[0].to_vector(sparse=False, dtype=int)
                elif descriptor == "RDKit":
                    vector = AllChem.GetMorganFingerprintAsBitVect(
                        mol,
                        radius=rdkit_radius,
                        nBits=bits,
                        useFeatures=rdkit_use_features,
                        useBondTypes=rdkit_use_bond_types,
                        useChirality=rdkit_use_chirality,
                    )
                fprint_list.append(vector)
                id = os.path.splitext(file_name)[0]
                id_list.append(id)
            except AttributeError:
                continue

    features = embedding(np.array(fprint_list), reduction_method)
    coords_with_id_list, class_num = cluster(
        features,
        id_list,
        cluster_method,
        {
            "n_cluster": clusters,
            "knn_algro": knn_algro,
            "eps": eps,
            "min_samples": min_samples,
        },
    )

    # Prepare the clustering results as JSON data
    result = {
        "coordinates": [coords.tolist() for coords in coords_with_id_list],
        "class_numbers": list(class_num),
        "ids": id_list,
    }
    return result
