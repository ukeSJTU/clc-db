import { MoleculeProps } from "@/types/molecule";

const MoleculeHeader = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <>
            <h2 className="text-2xl font-bold">{molecule.name || "N/A"}</h2>
            <p className="text-gray-500 dark:text-gray-400">
                Also known as ... ({molecule.cas_id || "N/A"})
            </p>
        </>
    );
};

export default MoleculeHeader;
