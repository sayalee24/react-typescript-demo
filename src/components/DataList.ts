import type { Locale } from "@src/enums/Locale";
import { useLocale } from "@src/hooks/useLocale";
import { formatNumber } from "@src/shared/utils/formatNumber";
import type { FC } from "react";

type DataListValue = string | number | JSX.Element | undefined;

interface DataListProps {
  data: { label: string; value: DataListValue }[];
}

const formatValue = (value: DataListValue, locale: Locale) => {
  if (typeof value === "number") {
    return formatNumber(locale, value, 2);
  }

  return value;
};

export const DataList: FC<DataListProps> = ({ data }) => {
  const locale = useLocale();

  return (
    <dl className="divide-y divide-gray-200 text-xs">
      {data.map(({ label, value }) => (
        <div
          key={label}
          className="grid grid-cols-2 grid-rows-1 gap-4 px-2 py-1"
        >
          <dt className="font-medium text-gray-500">{label}</dt>

          <dd className="mt-0 break-words text-gray-900">
            {formatValue(value, locale)}
          </dd>
        </div>
      ))}
    </dl>
  );
};
