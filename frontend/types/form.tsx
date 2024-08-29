import { z } from "zod";

const ClusterFormSchema = z.object({
    selectedFiles: z.array(z.instanceof(File)),
    descriptor: z.enum(["E3FP", "RDKit"]),
    bits: z.number().min(0).default(1024),
    radius: z.number().min(0).default(1.5),
    rdkitInv: z.boolean().default(true),
    rdkitRadius: z.number().min(0).default(2),
    rdkitUseFeatures: z.boolean().default(false),
    rdkitUseBondTypes: z.boolean().default(false),
    rdkitUseChirality: z.boolean().default(false),
    reductionMethod: z.enum(["PCA", "TSNE"]),
    clusterMethod: z.enum(["K-Means", "DBSCAN"]),
    clusters: z.number().min(1).default(5),
    knnAlgro: z.enum(["lloyd", "elkan"]), // "auto", "full" are deprecated in sklearn.KMeans after version1.1
    eps: z.number().min(0).default(0.25),
    minSamples: z.number().min(1).default(5),
});

export const clusterFormSchema = ClusterFormSchema;
export type ClusterFormSchema = z.infer<typeof ClusterFormSchema>;
