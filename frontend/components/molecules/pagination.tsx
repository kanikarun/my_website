"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ReactPaginate from "react-paginate";

import { cn } from "@/lib/utils";

interface PaginationProps {
  /**
   * An integer of maximum of records.
   */
  total?: number;
  /**
   * An integer and must be greater than 0.
   */
  limit?: number;
  /**
   * An integer and must be greater than or equal to 0.
   */
  offset?: number;
  /**
   * The method to call when a page is clicked.
   */
  onPageChange?: (page: number) => void;
}

const PreviousLabel = () => (
  <div className="flex items-center space-x-1">
    <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
  </div>
);

const NextLabel = () => (
  <div className="flex items-center space-x-1">
    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
  </div>
);

const className =
  "flex space-x-1 items-center p-2 tabular-nums tracking-tight text-gray-500 font-medium hover:text-teal transition-colors select-none";

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { limit = 1, offset = 0, total = 0, onPageChange } = props;
  const pageCount = Math.ceil(total / limit) || 0;
  const currentPage = Math.ceil(offset / limit);

  const handlePreviousClick = () => {
    if (currentPage - 1 >= 0 && onPageChange) {
      onPageChange(currentPage - 2);
    }
  };

  const handleNextClick = () => {
    if (currentPage + 1 < pageCount && onPageChange) {
      onPageChange(currentPage + 2);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "flex flex-1 items-center justify-between space-x-3 sm:hidden",
        )}
      >
        <button
          type="button"
          className={className}
          onClick={handlePreviousClick}
        >
          <PreviousLabel />
        </button>
        <div className="font-semibold text-gray-500 dark:text-gray-400">
          {currentPage + 1} / {pageCount}
        </div>
        <button type="button" className={className} onClick={handleNextClick}>
          <NextLabel />
        </button>
      </div>

      <ReactPaginate
        breakLabel="..."
        marginPagesDisplayed={1}
        forcePage={currentPage}
        nextLabel={<NextLabel />}
        onPageChange={({ selected }) =>
          onPageChange ? onPageChange(selected + 1) : null
        }
        pageCount={pageCount}
        pageRangeDisplayed={1}
        previousLabel={<PreviousLabel />}
        renderOnZeroPageCount={() => null}
        className={cn("hidden justify-center space-x-2 sm:flex")}
        pageLinkClassName={cn(
          "flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-600 text-sm transition",
          "hover:bg-gray-200 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
        )}
        activeLinkClassName={cn(
          "bg-primary border-primary hover:bg-primary text-white",
        )}
        breakLinkClassName={cn(
          "flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-400 dark:text-gray-500",
        )}
        previousLinkClassName={cn(
          "flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition",
          "hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
        )}
        nextLinkClassName={cn(
          "flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition",
          "hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
        )}
        disabledClassName={cn(
          "opacity-50 cursor-not-allowed dark:text-gray-500",
        )}
      />
    </div>
  );
};
