import type { RecordingSession } from "@src/models/API/RecordingSession";
import type { PaginatedResponse } from "./PaginatedResponse";

export interface GetRecordingSessionsResponse extends PaginatedResponse {
  items: RecordingSession[];
}
