'use client';

import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import React from 'react';

type Option = {
    value: string;
    label: string;
    icon?: React.ReactNode;
};

type CustomSelectProps = {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

export default function CustomSelect({
                                         options,
                                         value,
                                         onChange,
                                         placeholder = 'Select an option...',
                                     }: CustomSelectProps) {
    return (
        <Select.Root value={value} onValueChange={onChange}>
            <Select.Trigger
                className="inline-flex items-center justify-between px-4 py-2 border rounded-md shadow-sm w-64 bg-white text-sm"
                aria-label="Custom select"
            >
                <Select.Value placeholder={placeholder} />
                <Select.Icon>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
                <Select.Content
                    className="bg-white rounded-md shadow-lg z-50"
                    position="popper"
                >
                    <Select.Viewport className="p-1">
                        {options.map((option) => (
                            <Select.Item
                                key={option.value}
                                value={option.value}
                                className="flex items-center gap-2 p-2 text-sm hover:bg-gray-100 rounded cursor-pointer select-none"
                            >
                                <Select.ItemText>
                                    <div className="flex items-center gap-2">
                                        {option.icon}
                                        {option.label}
                                    </div>
                                </Select.ItemText>
                                <Select.ItemIndicator className="ml-auto text-green-500">
                                    <Check className="w-4 h-4" />
                                </Select.ItemIndicator>
                            </Select.Item>
                        ))}
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
}