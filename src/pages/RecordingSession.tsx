import { RecordingSessionsTable } from "@src/components/RecordingSessionTable/RecordingSessionsTable";
import { LoadingAnimation } from "@src/components/UI/LoadingAnimation";
import { PaginationProvider } from "@src/contexts/PaginationContext";
import { useRecordingSessionsAnalytics } from "@src/hooks/reactQuery/useRecordingSessionsAnalytics";
import { useGlobalTranslations } from "@src/hooks/translations";
import { usePageHeadline } from "@src/hooks/usePageHeadline";
import { validatePage } from "@src/shared/searchParams";
import type { FC } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Sessions: FC = () => {
  const [searchParams] = useSearchParams();
  const page = validatePage(searchParams);

  const { t } = useGlobalTranslations();
  const { setPageHeadline } = usePageHeadline();

  useEffect(() => {
    setPageHeadline(t("navigation.sessions"));

    () => {
      setPageHeadline("");
    };
  }, []);

  const { data, isLoading, isFetching } = useRecordingSessionsAnalytics(
    { page },
    { keepPreviousData: true }
  );

  if (!data && isLoading) {
    return <LoadingAnimation />;
  }

  if (!data) {
    return null;
  }

  const { items: recordingSessions, ...rest } = data;

  return (
    <PaginationProvider isFetching={isFetching} paginationData={rest}>
      <RecordingSessionsTable recordingSessions={recordingSessions} />
    </PaginationProvider>
  );
};

export default Sessions;
