from django.test import TestCase

# Create your tests here.
# utils.py

import os
import numpy as np
from e3fp.pipeline import fprints_from_sdf, mol_from_sdf
from rdkit import Chem
from rdkit.Chem import AllChem
from embedding import embedding, cluster

d = {
    "saved_folder": "cluster/1715614505-696419",
    "descriptor": "E3FP",
    "bits": "1024",
    "radius": "1.5",
    "rdkitInv": True,
    "reductionMethod": "PCA",
    "clusterMethod": "KNN",
    "clusters": "5",
    "knnAlgro": "lloyd",
    "eps": "0.25",
    "minSamples": "5",
}


def perform_clustering(
    saved_folder,
    descriptor,
    bits,
    radius,
    rdkit_inv,
    reduction_method,
    cluster_method,
    clusters,
    knn_algro,
    eps,
    min_samples,
):

    print(
        f"saved_folder: {saved_folder} \
            descriptor: {descriptor} \
            bits: {bits} \
            radius: {radius} \
            rdkit_inv: {rdkit_inv} \
            reduction_method: {reduction_method} \
            cluster_method: {cluster_method} \
            clusters: {clusters} \
            knn_algro: {knn_algro} \
            eps: {eps} \
            min_samples: {min_samples}"
    )

    fprint_list = []
    id_list = []

    for file_name in os.listdir(saved_folder):
        file_path = os.path.join(saved_folder, file_name)
        if os.path.isfile(file_path) and file_name.endswith(".sdf"):
            print(f"Processing file: {file_path}")
            if file_name in [
                "344-25-2.sdf",
                "118-10-5.sdf",
                "130-95-0.sdf",
                "130-89-2.sdf",
                "90-39-1.sdf",
                "522-66-7.sdf",
                "492-08-0.sdf",
            ]:
                continue
            try:
                mol = mol_from_sdf(file_path)
                print(f"mol: {mol}")
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
                        radius=int(radius),
                        nBits=bits,
                        useFeatures=True if rdkit_inv else False,
                        useBondTypes=True if rdkit_inv else False,
                        useChirality=True if rdkit_inv else False,
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
        "coordinates": coords_with_id_list,  # .tolist(),
        "class_numbers": list(class_num),  # .tolist(),
        "ids": id_list,
    }

    return result


print(
    perform_clustering(
        d["saved_folder"],
        d["descriptor"],
        int(d["bits"]),
        float(d["radius"]),
        d["rdkitInv"],
        d["reductionMethod"],
        d["clusterMethod"],
        int(d["clusters"]),
        d["knnAlgro"],
        float(d["eps"]),
        int(d["minSamples"]),
    )
)
