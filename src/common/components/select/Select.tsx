import React, { forwardRef } from 'react';

type Option = {
    value: string;
    label: string;
};

type SelectProps = {
    options: Option[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ options, ...props }, ref) => {
        return (
            <select ref={ref} {...props}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }
);

export default Select;