import type { Street } from "@src/models/API/Street";
import type { DefectFrame } from "../../../API/DefectFrame";

export interface PatchDefectFrameRequest {
  session_id: DefectFrame["id"];
  street_id: Street["id"];
  label_status_id: number;
  frame_uuid: DefectFrame["frame_uuid"];
  timestamp: DefectFrame["timestamp"];
  frame_recording_session_order: unknown;
  geometry: DefectFrame["geometry"];
  azimuth: DefectFrame["azimuth"];
  imu_logs_url: DefectFrame["imu_logs_url"];
  altitude: DefectFrame["altitude"];
  deletion_flag: DefectFrame["deletion_flag"];
  metadata_creation_timestamp: DefectFrame["metadata_creation_timestamp"];
  upload_timestamp: DefectFrame["upload_timestamp"];
  analysis_timestamp: DefectFrame["analysis_timestamp"];
  human_labelling_timestamp: DefectFrame["human_labelling_timestamp"];
  upload_requested: DefectFrame["upload_requested"];
  analysis_requested: DefectFrame["analysis_requested"];
  course_over_ground: DefectFrame["course_over_ground"];
}
