const SearchHeading = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200">
                Search Molecules
            </h1>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
                Enter your search query below to find the best match. You can
                search for CAS ID, Name, or SMILE by ticking the corresponding
                checkbox below.
            </p>
        </div>
    );
};

const SearchTip = () => {
    return (
        <small className="text-xs text-gray-500 dark:text-gray-400">
            Tip: Click the plus button to use kekulejs for drawing and searching
            by structures.
        </small>
    );
};

export { SearchHeading, SearchTip };
