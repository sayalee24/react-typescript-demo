import type { Roles } from "@src/models/API/Roles";

export const isHochtiefAdmin = (roles: Roles[]) =>
  roles.includes("ROLE_HOCHTIEF_ADMIN");

export const isAdmin = (roles: Roles[]) => roles.includes("ROLE_ADMIN");

export const isViewer = (roles: Roles[]) => roles.includes("ROLE_VIEWER");
