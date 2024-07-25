import { Listbox } from '@headlessui/react';
import type { ComponentProps, FC } from 'react';
import { useRef } from 'react';
import { SelectButton } from './components/SelectButton';
import type { OptionProps } from './components/SelectOption';
import { SelectOptions } from './components/SelectOptions';

interface SelectProps extends Omit<ComponentProps<'select'>, 'onChange'> {
    id: ComponentProps<'select'>['id'];
    name: ComponentProps<'select'>['name'];
    options: OptionProps[];
    label?: string;
    onChange?: (value: any) => void;
    'data-test'?: string;
}

export const Select: FC<SelectProps> = ({
    label,
    onChange,
    options,
    placeholder,
    'data-test': dataTest,
    ref: _ref,
    ...rest
}) => {
    const selectButtonRef = useRef<HTMLButtonElement>(null);

    const getLabelFromValue = (value: string | string[]) => {
        if (Array.isArray(value) && value.length > 0) {
            return value.map(v => options.find(option => option.value === v)?.label).join(', ');
        } else if (value) {
            return options.find(option => option.value === value)?.label || placeholder;
        } else {
            return placeholder;
        }
    };

    const select = (
        <Listbox onChange={onChange} {...rest} data-test={dataTest}>
            {({ value: selectedValue }) => (
                <div className="relative">
                    <SelectButton selectButtonRef={selectButtonRef}>{getLabelFromValue(selectedValue)}</SelectButton>

                    <SelectOptions
                        options={options}
                        data-test={dataTest}
                        style={{ width: selectButtonRef.current?.clientWidth }}
                    />
                </div>
            )}
        </Listbox>
    );

    if (label) {
        return (
            <div className="flex flex-col justify-start">
                <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>
                {select}
            </div>
        );
    }

    return select;
};
