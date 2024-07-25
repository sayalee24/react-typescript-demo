import type {
  ChangeEvent,
  ComponentProps,
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import { useRef } from "react";

interface TableFilterProps extends ComponentProps<"input"> {
  handleChange: Dispatch<SetStateAction<string>>;
}

let timeout: NodeJS.Timeout;

export const TableFilter: FC<TableFilterProps> = ({
  handleChange,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleChange(event.target.value);
    }, 500);
  };

  return <input ref={inputRef} onChange={onChange} {...rest} />;
};
