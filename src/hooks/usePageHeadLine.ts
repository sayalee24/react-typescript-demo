import { PageHeadlineContext } from "context/PageHeadlineContext";
import { useContext } from "react";

export const usePageHeadline = () => {
  const context = useContext(PageHeadlineContext);

  if (context === null) {
    const err = new Error(
      `usePageHeadline must be used within a PageHeadlineContext`
    );

    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, usePageHeadline);
    }

    throw err;
  }

  return context;
};
