/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pubchem.ncbi.nlm.nih.gov",
                port: "",
                pathname: "/image/**",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "8000",
                pathname: "/static/2Dimages/**",
            },
            {
                protocol: "http",
                hostname: "www.ukehome.top",
                port: "",
                pathname: "/static/**",
            },
            {
                protocol: "https",
                hostname: "compbio.sjtu.edu.cn"
            }
        ],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    basePath: "/services/clc-db",
};

export default nextConfig;
