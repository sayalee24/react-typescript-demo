import { z } from "zod";
import { CalibrationSchema } from "./Calibration";
import { ClientSchema } from "./Client";
import { DeviceSchema } from "./Device";
import { ModeSchema } from "./Mode";

export const RecordingSessionSchema = z.object({
  id: z.number(),
  device: DeviceSchema,
  mode: ModeSchema,
  calibration: CalibrationSchema,
  start_timestamp: z.string(),
  stop_timestamp: z.string(),
  upload_status: z.string(),
  client: ClientSchema,
  deletion_flag: z.boolean(),
});

export type RecordingSession = z.infer<typeof RecordingSessionSchema>;
