import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { usePagination } from "@src/hooks/usePagination";
import { SEARCH_PARAMS } from "@src/shared/const/searchParams";
import { validatePage } from "@src/shared/searchParams";
import type { FC } from "react";
import { useSearchParams } from "react-router-dom";

interface TablePaginationProps {
  "data-test": string;
}

export const TablePagination: FC<TablePaginationProps> = ({
  "data-test": dataTest,
}) => {
  const {
    isFetching,
    paginationData: { has_next, has_prev, pages },
  } = usePagination();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = validatePage(searchParams);

  if (pages === 1) {
    return null;
  }

  const updatePage = (page: number) => {
    if (page === 1) {
      searchParams.delete(SEARCH_PARAMS.PAGE);
      searchParams.sort();

      setSearchParams(searchParams);
      return;
    }

    searchParams.set(SEARCH_PARAMS.PAGE, page.toString());
    searchParams.sort();

    setSearchParams(searchParams);
  };

  return (
    <nav
      className="isolate inline-flex w-full justify-end -space-x-px"
      aria-label="Pagination"
      data-test={dataTest}
    >
      <button
        type="button"
        onClick={() => updatePage(1)}
        disabled={isFetching}
        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        data-test={`${dataTest}-first`}
      >
        <span className="sr-only">First</span>
        <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => updatePage(page - 1)}
        disabled={!has_prev || isFetching}
        className="relative inline-flex items-center border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        data-test={`${dataTest}-previous`}
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => updatePage(page + 1)}
        disabled={!has_next || isFetching}
        className="relative inline-flex items-center border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        data-test={`${dataTest}-next`}
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={() => updatePage(pages)}
        disabled={isFetching}
        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        data-test={`${dataTest}-last`}
      >
        <span className="sr-only">Last</span>
        <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
};
