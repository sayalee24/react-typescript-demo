import { SeverityLevel } from "@microsoft/applicationinsights-web";
import type { NewNotification } from "@src/contexts/NotificationContext";
import { appInsights } from "@src/main";
import type { AxiosError } from "axios";
import { t } from "i18next";

export const handleQueryError =
  (newNotification: (notification: NewNotification) => void) =>
  (error: AxiosError) => {
    newNotification({
      title: t("error.network.notification.title"),
      text: t("error.network.notification.text"),
      type: "error",
    });

    if (import.meta.env.PROD) {
      appInsights.trackException({
        error: error,
        exception: error,
        severityLevel: SeverityLevel.Error,
      });
    }
  };

export const ReactQueryKeys = {
  ALL_CLIENTS: "all-clients",
  ALL_DEVICES: "all-devices",
  ANALYZE_DEFECT_FRAME: "analyze-defect-frame",
  CITIES: "cities",
  CLIENTS: "clients",
  CREATE_CLIENT: "create-client",
  CREATE_DEVICE: "create-device",
  CREATE_EEMI_SUB_SUB_TYPE: "create-eemi-sub-sub-type",
  CREATE_LABEL_STATUS: "create-label-status",
  CREATE_OSM_ROAD_NETWORK: "create-osm-road-network",
  CREATE_ROAD_NETWORK: "create-road-network",
  CREATE_SUPPORT_TICKET: "create-support-ticket",
  CREATE_USER: "create-user",
  CUSTOM_LAYER_GEOJSON: "custom-layer-geojson",
  CUSTOM_LAYER: "custom-layer",
  CUSTOM_LAYERS: "custom-layers",
  DEFECT_FRAME_STATUS: "defect-frame-status",
  DEFECT_FRAMES_ANALYTICS: "defect-frames-analytics",
  DEFECT_FRAMES: "defect-frame",
  DEFECT_FRAME_INFO: "defect-frame-info",
  DELETE_CLIENT: "delete-client",
  DELETE_DEFECT_FRAME: "delete-defect-frame",
  DELETE_DEVICE: "delete-device",
  DELETE_EEMI_SUB_SUB_TYPE: "delete-eemi-sub-sub-type",
  DELETE_LABEL_STATUS: "delete-label-status",
  DELETE_ROAD_NETWORK: "delete-road-network",
  DELETE_SESSIONS: "delete-sessions",
  DELETE_USER: "delete-user",
  DEVICE_DIGITAL_TWIN: "device-digital-twin",
  DEVICE: "device",
  DEVICES: "devices",
  EEMI_SUB_SUB_TYPES_BY_DEFECT_FRAME_ID:
    "eemi-sub-sub-types-by-defect-frame-id",
  EEMI_SUB_SUB_TYPES: "eemi-sub-sub-types",
  EEMI_SUB_TYPES: "eemi-sub-types",
  EEMI_TYPES: "eemi-types",
  FRAMES_ANALYTICS_DATA: "frame-analytics-data",
  GEO_JSON_CLIENT_BORDER: "geo-json-client-border",
  GEO_JSON_DEFECT_FRAME_GRID_AREAS: "geo-json-defect-frame-grid-areas",
  GEO_JSON_DEFECT_FRAMES_ANALYZE: "geo-json-defect-frames-analyze",
  GEO_JSON_DEFECT_FRAMES: "geo-json-defect-frames",
  GEO_JSON_RECORDING_SESSIONS: "geo-json-recording-sessions",
  GEO_JSON_ROAD_NETWORK_DEFECT_FRAME_GRID_AREAS:
    "geo-json-road-network-defect-frame-grid-areas",
  GEO_JSON_ROAD_NETWORK_DEFECT_FRAMES: "geo-json-road-network-defect-frames",
  GEO_JSON_ROAD_NETWORK_ROAD_SEGMENTS: "geo-json-road-network-road-segments",
  GEO_JSON_ROAD_SEGMENT_DEFECT_FRAMES: "geo-json-road-segment-defect-frames",
  GEO_JSON_ROAD_SEGMENT_DEFECTS: "geo-json-road-segment-defects",
  GEO_JSON_ROAD_SEGMENT_SUB_SUB_TYPES_STATISTICS:
    "geo-json-road-segment-sub-sub-types-statistics",
  GEO_JSON_ROAD_SEGMENT_SUB_SUB_TYPES: "geo-json-road-segment-sub-sub-types",
  GEO_JSON_ROAD_SEGMENT_SUB_TYPES: "geo-json-road-segment-sub-types",
  IMAGE_ANNOTATED: "image-annotated",
  IMAGE_BBOXS: "image-bboxs",
  IMAGE_TOP_VIEW: "image-top-view",
  IMAGE: "image",
  LABEL_STATUSES: "label-statuses",
  RECORDING_SESSIONS: "recording-sessions",
  ROAD_NETWORKS: "road-networks",
  SEARCH_ADDRESS: "search-address",
  SEND_INVITATION_EMAIL: "send-invitation-email",
  SESSIONS: "sessions",
  SWAGGER_JSON: "swagger-json",
  UPDATE_CLIENT: "update-client",
  UPDATE_DEFECT_FRAME: "update-defect-frame",
  UPDATE_DEVICE: "update-device",
  UPDATE_EEMI_SUB_SUB_TYPE: "update-eemi-sub-sub-type",
  UPDATE_LABEL_STATUS: "update-label-status",
  UPDATE_ROAD_NETWORK: "update-road-network",
  UPDATE_SESSIONS: "update-sessions",
  UPDATE_USER: "update-user",
  UPLOAD_ROAD_NETWORK: "upload-road-network",
  USER_PROFILE: "user-profile",
  USERS: "users",
} as const;
