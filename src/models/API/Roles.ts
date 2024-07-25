import { z } from "zod";

export const RolesSchema = z.enum([
  "ROLE_VIEWER",
  "ROLE_ADMIN",
  "ROLE_HOCHTIEF_ADMIN",
]);

export type Roles = z.infer<typeof RolesSchema>;
