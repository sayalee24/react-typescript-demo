import type { PaginatedResponse } from "@src/models/webservice/response/API/PaginatedResponse";
import type { FC, PropsWithChildren } from "react";
import { createContext } from "react";

export const PaginationContext = createContext<{
  isFetching: boolean;
  paginationData: PaginatedResponse;
} | null>(null);

interface PaginationProviderProps {
  isFetching: boolean;
  paginationData: PaginatedResponse;
}

export const PaginationProvider: FC<
  PropsWithChildren<PaginationProviderProps>
> = ({ isFetching, paginationData, children }) => {
  return (
    <PaginationContext.Provider value={{ isFetching, paginationData }}>
      {children}
    </PaginationContext.Provider>
  );
};
