import { Listbox } from '@headlessui/react';
import type { ComponentProps, FC } from 'react';
import { useRef } from 'react';
import type { NestedOptionProps } from './components/NestedSelectOption';
import { NestedSelectOptions } from './components/NestedSelectOptions';
import { SelectButton } from './components/SelectButton';

interface NestedSelectProps extends Omit<ComponentProps<'select'>, 'onChange'> {
    id: ComponentProps<'select'>['id'];
    name: ComponentProps<'select'>['name'];
    options: NestedOptionProps[];
    label?: string;
    onChange?: (value: any) => void;
    'data-test'?: string;
}

export const NestedSelect: FC<NestedSelectProps> = ({
    onChange,
    options,
    placeholder,
    'data-test': dataTest,
    ref: _ref,
    ...rest
}) => {
    const selectButtonRef = useRef<HTMLButtonElement>(null);

    const getLabelFromValue = (value: string) => options.find(option => option.value === value)?.label || placeholder;

    return (
        <Listbox onChange={onChange} {...rest} data-test={dataTest}>
            {({ value: selectedValue }) => (
                <div className="relative">
                    <SelectButton selectButtonRef={selectButtonRef}>{getLabelFromValue(selectedValue)}</SelectButton>

                    <NestedSelectOptions
                        options={options}
                        data-test={dataTest}
                        style={{ width: selectButtonRef.current?.clientWidth }}
                    />
                </div>
            )}
        </Listbox>
    );
};
