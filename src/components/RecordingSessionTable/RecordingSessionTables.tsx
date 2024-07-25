import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePostDefectFrameAnalyticsMutation } from "@src/hooks/reactQueryMutations/usePostDefectFrameAnalyticsMutation";
import { useRecordingSessionsTranslations } from "@src/hooks/translations";
import { useDialogs } from "@src/hooks/useDialogs";
import { useLocale } from "@src/hooks/useLocale";
import { useUser } from "@src/hooks/useUser";
import type { RecordingSessionAnalytics } from "@src/models/API/RecordingSessionAnalytics";
import { isHochtiefAdmin } from "@src/shared/authorization/authorization";
import {
  DATA_TEST_SESSIONS_DELETE_BUTTON,
  DATA_TEST_SESSIONS_DETAILED_VIEW_BUTTON,
  DATA_TEST_SESSIONS_TABLE,
  DATA_TEST_SESSIONS_TABLE_HEADER_ACTIONS,
  DATA_TEST_SESSIONS_TABLE_HEADER_ANALYZED_IMAGES,
  DATA_TEST_SESSIONS_TABLE_HEADER_DELETED,
  DATA_TEST_SESSIONS_TABLE_HEADER_DEVICE,
  DATA_TEST_SESSIONS_TABLE_HEADER_END_TIME,
  DATA_TEST_SESSIONS_TABLE_HEADER_MODE,
  DATA_TEST_SESSIONS_TABLE_HEADER_SESSION_ID,
  DATA_TEST_SESSIONS_TABLE_HEADER_START_TIME,
  DATA_TEST_SESSIONS_TABLE_HEADER_UPLOADED_IMAGES,
  DATA_TEST_SESSIONS_TABLE_PAGINATION,
} from "@src/shared/dataTest/pages/dataTestSessions";
import { formatNumber } from "@src/shared/utils/formatNumber";
import type { ColumnDef } from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type { FC } from "react";
import { useMemo } from "react";
import { Table } from "../Table/Table";
import { Checkbox } from "../UI/Inputs/Checkbox";
import { DeleteRecordingSessionDialog } from "./Dialogs/DeleteRecordingSessionDialog";
import { DetailsRecordingSessionDialog } from "./Dialogs/DetailsRecordingSessionDialog";

const columnHelper = createColumnHelper<RecordingSessionAnalytics>();

interface RecordingSessionsTableProps {
  recordingSessions: RecordingSessionAnalytics[];
}

export const RecordingSessionsTable: FC<RecordingSessionsTableProps> = ({
  recordingSessions,
}) => {
  const { recordingSessionsT } = useRecordingSessionsTranslations();
  const locale = useLocale();
  const { roles } = useUser();
  const {
    state: { showDeleteDialog, selectedData, showDetailsDialog },
    handleShowDeleteDialog,
    handleShowDetailsDialog,
    handleCloseDialogs,
  } = useDialogs<RecordingSessionAnalytics>();
  const postDefectFrameAnalyticsMutation =
    usePostDefectFrameAnalyticsMutation();

  const columns = useMemo<ColumnDef<RecordingSessionAnalytics, any>[]>(
    () => [
      columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_SESSION_ID}>
            {recordingSessionsT("table.headers.session_id")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row.device_id, {
        id: "device",
        cell: (info) => info.getValue(),
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_DEVICE}>
            {recordingSessionsT("table.headers.device")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row.mode_id, {
        id: "mode",
        cell: (info) => info.getValue(),
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_MODE}>
            {recordingSessionsT("table.headers.mode")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row.start_timestamp, {
        id: "start_timestamp",
        cell: (info) => {
          const date = new Date(info.getValue());
          return date.toLocaleString();
        },
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_START_TIME}>
            {recordingSessionsT("table.headers.start_time")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row.stop_timestamp, {
        id: "stop_timestamp",
        cell: (info) => {
          const date = new Date(info.getValue());
          return date.toLocaleString();
        },
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_END_TIME}>
            {recordingSessionsT("table.headers.end_time")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "uploaded_images",
        cell: (info) => {
          const percentageUploaded =
            (info.getValue().uploaded_count / info.getValue().frames_count) *
            100;
          return formatNumber(locale, percentageUploaded, 3);
        },
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_UPLOADED_IMAGES}>
            {recordingSessionsT("table.headers.uploadPercentage")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row, {
        id: "analyzed_images",
        cell: (info) => {
          const percentageAnalyzed =
            (info.getValue().analyzed_count / info.getValue().frames_count) *
            100;
          return formatNumber(locale, percentageAnalyzed, 3);
        },
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_ANALYZED_IMAGES}>
            {recordingSessionsT("table.headers.analyzePercentage")}
          </span>
        ),
      }),
      columnHelper.accessor((row) => row.deletion_flag, {
        id: "deletion_flag",
        cell: (info) => {
          return (
            <Checkbox disabled={true} checked={Boolean(info.getValue())} />
          );
        },
        header: () => (
          <span data-test={DATA_TEST_SESSIONS_TABLE_HEADER_DELETED}>
            {recordingSessionsT("table.headers.deletion")}
          </span>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: recordingSessions,
    columns,
    state: {
      columnVisibility: {
        id: true,
        device: true,
        mode: true,
        start_timestamp: true,
        stop_timestamp: true,
        uploaded_images: true,
        analyzed_images: true,
        deletion_flag: isHochtiefAdmin(roles),
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: import.meta.env.DEV,
  });

  return (
    <>
      <div className="flex h-full w-full flex-col gap-4 p-4">
        <Table data-test={DATA_TEST_SESSIONS_TABLE}>
          <Table.TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Table.TableHeaderCell
                    {...{
                      key: header.id,
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.TableHeaderCell>
                ))}
                <Table.TableHeaderCell
                  data-test={DATA_TEST_SESSIONS_TABLE_HEADER_ACTIONS}
                >
                  {recordingSessionsT("table.headers.actions")}
                </Table.TableHeaderCell>
              </Table.TableRow>
            ))}
          </Table.TableHeader>

          <Table.TableBody>
            {table.getRowModel().rows.map((row) => (
              <Table.TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.TableCell>
                ))}
                <Table.TableCell>
                  <div className="flex h-full items-center gap-4">
                    <Table.TableActionButton
                      onClick={async () => {
                        await postDefectFrameAnalyticsMutation.mutateAsync({
                          session_id: row.original.id,
                        });

                        handleShowDetailsDialog(row.original);
                      }}
                      data-test={`${DATA_TEST_SESSIONS_DETAILED_VIEW_BUTTON}-${row.original.id}`}
                    >
                      <InformationCircleIcon className="h-4 w-4" />
                    </Table.TableActionButton>

                    <Table.TableActionButton
                      onClick={() => handleShowDeleteDialog(row.original)}
                      data-test={`${DATA_TEST_SESSIONS_DELETE_BUTTON}-${row.original.id}`}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Table.TableActionButton>
                  </div>
                </Table.TableCell>
              </Table.TableRow>
            ))}
          </Table.TableBody>
        </Table>

        <Table.TablePagination
          data-test={DATA_TEST_SESSIONS_TABLE_PAGINATION}
        />
      </div>

      {/**
       * Dialogs
       */}
      {selectedData && (
        <DetailsRecordingSessionDialog
          recordingSession={selectedData}
          defectFrameAnalytics={postDefectFrameAnalyticsMutation.data?.data}
          isOpen={showDetailsDialog}
          handleClose={handleCloseDialogs}
        />
      )}

      {selectedData && (
        <DeleteRecordingSessionDialog
          recordingSession={selectedData}
          isOpen={showDeleteDialog}
          handleClose={handleCloseDialogs}
        />
      )}
    </>
  );
};
