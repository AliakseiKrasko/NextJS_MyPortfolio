"use client";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {useState} from "react";
import s from"./DataPicker.module.css"

export function MyDatePicker() {
    const [selected, setSelected] = useState<Date>();

    return (
        <DayPicker
            showOutsideDays
            animate className={s.customAnimate}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
                selected
                    ? `You picked ${selected.toLocaleDateString()}.`
                    : "Please pick a date."
            }
        />
    );
}
