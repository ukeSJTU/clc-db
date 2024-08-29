export type Category = {
    id: number;
    name: string;
};

export type Chirality = {
    id: number;
    name: string;
};

export type MoleculeProps = {
    name: string;
    cas_id: string;
    pubchem_cid?: string; // Optional as it can be empty
    category: Category[]; // Array of related categories
    url?: string; // Optional URL field
    pubchem_url?: string; // Optional PubChem URL field
    smiles: string;
    chirality: Chirality[]; // Array of related chirality types
    description?: string; // Optional description field
    smiles_iupac?: string; // Optional IUPAC name field
    molecule_formula?: string; // Optional molecular formula
    molecular_weight?: number; // Optional molecular weight
    heavy_atom_count?: number; // Optional heavy atom count
    ring_count?: number; // Optional ring count
    hydrogen_bond_acceptor_count?: number; // Optional hydrogen bond acceptor count
    hydrogen_bond_donor_count?: number; // Optional hydrogen bond donor count
    rotatable_bond_count?: number; // Optional rotatable bond count
    InChI?: string;
    InChIKey?: string;
};
