import Image from "next/image";

const HelpPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 md:max-w-4xl">
            <section className="mb-8">
                <h1 className="text-4xl font-bold">Help</h1>
                <small className="text-gray-700">
                    This is help page, read throught it to get a grasp of what
                    you can do on this website.
                </small>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db">Home Page</a>
                </h2>
                <p className="mb-4">
                    Use the{" "}
                    <strong className="text-blue-700">navigation bar</strong> to
                    get quick access to the database.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/1.png"
                        alt="Navigation Bar"
                        width={1292}
                        height={617}
                        quality={100}
                    />
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/overview/card/1">Overview</a>
                </h2>
                <p className="mb-4">
                    Retrieve the information in the format of cards or tables.
                    Suitable for casual{" "}
                    <strong className="text-blue-700">browsing</strong>. You can
                    click to download or review details of the certain molecule
                    you are interested in.
                </p>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/2.png"
                            alt="Overview Cards"
                            width={610}
                            height={688}
                            quality={100}
                        />
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/3.png"
                            alt="Overview Table"
                            width={957}
                            height={172}
                            quality={100}
                        />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/download/categories">Download</a>
                </h2>
                <p className="mb-4">
                    Suitable for{" "}
                    <strong className="text-blue-700">batch downloading</strong>
                    . It&apos;s similar to the overview page but you can choose
                    to download multiple molecules of{" "}
                    <strong className="text-blue-700">one category</strong>, in
                    a page or all of them.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/4.png"
                        alt="Download Page"
                        width={1519}
                        height={692}
                        quality={100}
                    />
                </div>
                <p className="my-4">
                    What you will get here is a folder of SDFs and a combined
                    Excel of basic information. Notice that if downloaded
                    separately, XLSX files will be individual and require manual
                    merging of rows. This is the{" "}
                    <strong className="text-blue-700">only method</strong> to
                    obtain a <strong className="text-blue-700">combined</strong>{" "}
                    one.
                </p>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/5.png"
                            alt="Downloaded Files"
                            width={566}
                            height={725}
                            quality={100}
                        />
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/6.png"
                            alt="Download Options"
                            width={1487}
                            height={328}
                            quality={100}
                        />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/search">Search</a>
                </h2>
                <p className="mb-4">
                    You can search for CAS ID, Name, or SMILE. Notice that you
                    can perform{" "}
                    <strong className="text-blue-700">
                        a partial keyword search
                    </strong>
                    , and the system will automatically match all relevant
                    results:
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/7.png"
                        alt="Search Results"
                        width={1272}
                        height={683}
                        quality={100}
                    />
                </div>
                <p className="my-4">
                    You can <strong className="text-blue-700">draw</strong> a
                    structure and it will be converted into SMILES for
                    searching. Note that partial search also applies.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/8.png"
                        alt="Structure Search"
                        width={1860}
                        height={610}
                        quality={100}
                    />
                </div>
                <p className="my-4">
                    Also, we support{" "}
                    <strong className="text-blue-700">multi-search</strong> by
                    uploading a CSV of IDs:
                </p>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/9.png"
                            alt="Multi-search"
                            width={263}
                            height={209}
                            quality={100}
                        />
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/10.png"
                            alt="Multi-search Results"
                            width={986}
                            height={537}
                            quality={100}
                        />
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/cluster">Cluster</a>
                </h2>
                <p className="mb-4">
                    <strong className="text-blue-700">Clustering</strong> is the{" "}
                    <strong className="text-blue-700">core</strong> function of
                    this database. Thanks to the high-quality 3D coordinate
                    information computed, you can download SDF files and perform
                    dimensionality reduction and clustering to guide your
                    experiments.
                </p>
                <p className="mb-4">
                    Let&apos;s assume you are conducting a ligand screening
                    experiment, and you have completed a portion of it,
                    obtaining the yield for each ligand. Now, as you proceed
                    with your experiment and explore more ligands, our database
                    is here to assist you:
                </p>
                <p className="mb-4">
                    Firstly, you need to{" "}
                    <strong className="text-blue-700">download</strong> all
                    relevant SDF files from the database, including those you
                    have completed and those you are yet to explore, and then{" "}
                    <strong className="text-blue-700">upload</strong> them to
                    our online clustering tool.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/11.png"
                        alt="Clustering Upload"
                        width={1660}
                        height={464}
                    />
                </div>
                <p className="my-4">
                    Secondly, you need to select{" "}
                    <strong className="text-blue-700">descriptors</strong> for
                    clustering, as well as the{" "}
                    <strong className="text-blue-700">
                        dimensionality reduction method
                    </strong>
                    ,{" "}
                    <strong className="text-blue-700">
                        clustering algorithm
                    </strong>
                    , and their corresponding{" "}
                    <strong className="text-blue-700">parameters</strong>. We
                    provide a visual adjustment bar for your convenience, so
                    please experiment multiple times until you achieve
                    satisfactory results.
                </p>
                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/12.png"
                            alt="Clustering Options"
                            width={1686}
                            height={702}
                            quality={100}
                        />
                    </div>
                    <div className="bg-white p-4 flex justify-center">
                        <Image
                            src="/services/clc-db/help/13.png"
                            alt="Clustering Results"
                            width={1652}
                            height={817}
                            quality={100}
                        />
                    </div>
                </div>
                <p className="my-4">
                    Lastly, based on the clustering outcomes,{" "}
                    <strong className="text-blue-700">select</strong> the
                    ligands you will explore next. In general, you should
                    prioritize ligands that are{" "}
                    <strong className="text-blue-700">
                        close to those with high yields
                    </strong>{" "}
                    and{" "}
                    <strong className="text-blue-700">
                        different from those with low yields
                    </strong>
                    . This prioritization is likely to assist you in identifying
                    the optimal ligands quickly.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/14.png"
                        alt="Ligand Selection"
                        width={1038}
                        height={561}
                        quality={100}
                    />
                </div>
                <p className="my-4">
                    What&apos;s more, we provide a{" "}
                    <strong className="text-blue-700">quick sample</strong> for
                    your reference. Click here to generate an example consisting
                    of 100 samples with auto-selected parameters. These samples
                    are processed using E3FP or RDKIT fingerprints,
                    dimensionality reduction with PCA, and K-Means clustering.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/15.png"
                        alt="Cluster Example"
                        width={791}
                        height={720}
                        quality={100}
                    />
                </div>
                <p className="my-4">
                    Click here to access the 100 samples used in the example.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/16.png"
                        alt="Download Cluster Example"
                        width={1117}
                        height={390}
                        quality={100}
                    />
                </div>
                <p className="my-4">
                    Click here to refer to the basic parameters used in the
                    example.
                </p>
                <div className="bg-white p-4 flex justify-center">
                    <Image
                        src="/services/clc-db/help/17.png"
                        alt="View Cluster Params"
                        width={1280}
                        height={720}
                        quality={100}
                    />
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/statistics">Stats</a>
                </h2>
                <p className="mb-4">
                    Obtain various{" "}
                    <strong className="text-blue-700">graphics</strong>, such as
                    molecular weight distribution and ligand type distribution.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/help">Help</a>
                </h2>
                <p className="mb-4">
                    Click here and you will jump to this page for help.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 underline">
                    <a href="/services/clc-db/contact">Contact</a>
                </h2>
                <p>
                    If you have any questions, don&apos;t hesitate to contact
                    us.
                </p>
            </section>
        </div>
    );
};

export default HelpPage;
