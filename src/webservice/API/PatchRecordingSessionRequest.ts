import type { Calibration } from "@src/models/API/Calibration";
import type { Client } from "@src/models/API/Client";
import type { Device } from "@src/models/API/Device";
import type { Mode } from "@src/models/API/Mode";

export interface PatchRecordingSessionRequest {
  id: number;
  device: Device["id"];
  mode: Mode["id"];
  calibration: Calibration["id"];
  start_timestamp: string;
  stop_timestamp: string;
  upload_status: string;
  client: Client["id"];
  deletion_flag: boolean;
}
