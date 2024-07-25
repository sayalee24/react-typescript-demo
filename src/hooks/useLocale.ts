import type { Locale } from "../enums/Locale";
import i18n from "../shared/i18n/i18n";

export const useLocale = () => i18n.language as Locale;
