import numpy as np
from sklearn.manifold import TSNE
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans, DBSCAN


def embedding(fprint: np.array, method="PCA", random_state=33):
    if method == "PCA":
        x = PCA(n_components=2).fit_transform(fprint)
        return x
    elif method == "TSNE":
        x = TSNE(n_components=2, random_state=random_state).fit_transform(fprint)
        return x
    else:
        AssertionError(f"No method called {method}")


def cluster(features, id, method, params):
    if method == "K-Means":
        km = KMeans(
            n_clusters=params["n_cluster"],
            algorithm=params["knn_algro"],
            init="k-means++",
        )
        y = km.fit_predict(features)
        class_num = set(y)

    elif method == "DBSCAN":
        dbscan = DBSCAN(eps=params["eps"], min_samples=params["min_samples"])
        y = dbscan.fit_predict(features)
        class_num = set(y)

    coords_with_id_list = []
    for i in class_num:
        coords_with_id = np.concatenate(
            [
                features[np.where(y == i)],
                np.array(id)[np.where(y == i)].reshape([-1, 1]),
            ],
            axis=-1,
        )
        coords_with_id_list.append(coords_with_id)
    return coords_with_id_list, class_num
