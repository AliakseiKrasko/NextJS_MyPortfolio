"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {useState} from "react";
import s from"./DataPicker.module.css"

export function MyDatePicker() {
    const [selectedRange, setSelectedRange] = useState<{ from?: Date, to?: Date }>({});

    const handleSelect = (dateRange: { from?: Date, to?: Date }) => {
        setSelectedRange(dateRange);
    };

    return (
        <DayPicker
            showOutsideDays
            animate className={s.customAnimate}
            mode="range"
            selected={selectedRange}
            onSelect={handleSelect}
            footer={
                selectedRange.from && selectedRange.to
                    ? `You picked from ${selectedRange.from.toLocaleDateString()} to ${selectedRange.to.toLocaleDateString()}.`
                    : "Please pick a date."
            }
        />
    );
}
