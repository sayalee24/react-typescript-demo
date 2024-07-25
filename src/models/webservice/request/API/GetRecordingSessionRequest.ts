import type { SortDirection } from "./SortDirectionType";

export interface GetRecordingSessionsRequest {
  page: number;
  per_page: number;
  device_id: number;
  mode_id: number;
  calibration_id: number;
  start_timestamp: Date;
  start_date_range: Date;
  stop_timestamp: Date;
  stop_date_range: Date;
  upload_status: string;
  client_id: string;
  deletion_flag: boolean;
  sortBy: keyof GetRecordingSessionsRequest;
  sortDirection: SortDirection;
}
