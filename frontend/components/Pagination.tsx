import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronsLeftIcon,
    ChevronsRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface PaginationComponentProps {
    page: number;
    setPage: (page: number) => void;
    pageSize: number;
    setPageSize: (pageSize: number) => void;
    totalPages: number;
    pageSizeOptions?: number[];
}

export function PaginationComponent({
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    pageSizeOptions = [12, 24, 36],
}: PaginationComponentProps) {
    return (
        <div className="flex flex-col-reverse items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            {/* Page Size Selection */}
            <div className="flex items-center space-x-2">
                <p className="whitespace-nowrap text-sm font-medium">
                    Rows per page
                </p>
                <Select
                    value={`${pageSize}`}
                    onValueChange={(value) => setPageSize(Number(value))}
                >
                    <SelectTrigger className="h-8 w-[4.5rem]">
                        <SelectValue placeholder={pageSize} />
                    </SelectTrigger>
                    <SelectContent side="top">
                        {pageSizeOptions.map((size) => (
                            <SelectItem key={size} value={`${size}`}>
                                {size}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center text-sm font-medium">
                Page {page} of {totalPages}
            </div>
            <div className="flex items-center space-x-2">
                {/* First Page */}
                <Button
                    aria-label="Go to first page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(1)}
                    disabled={page <= 1}
                >
                    <ChevronsLeftIcon className="size-4" aria-hidden="true" />
                </Button>
                {/* Previous Page */}
                <Button
                    aria-label="Go to previous page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(Math.max(page - 1, 1))}
                    disabled={page <= 1}
                >
                    <ChevronLeftIcon className="size-4" aria-hidden="true" />
                </Button>
                {/* Next Page */}
                <Button
                    aria-label="Go to next page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(Math.min(page + 1, totalPages))}
                    disabled={page >= totalPages}
                >
                    <ChevronRightIcon className="size-4" aria-hidden="true" />
                </Button>
                {/* Last Page */}
                <Button
                    aria-label="Go to last page"
                    variant="outline"
                    size="icon"
                    onClick={() => setPage(totalPages)}
                    disabled={page >= totalPages}
                >
                    <ChevronsRightIcon className="size-4" aria-hidden="true" />
                </Button>
            </div>
        </div>
    );
}
