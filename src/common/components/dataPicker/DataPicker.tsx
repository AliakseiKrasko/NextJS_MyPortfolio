"use client";
import {DayPicker} from "react-day-picker";
import "react-day-picker/style.css";
import {useState} from "react";
import './../../../app/globals.css';


export function MyDatePicker() {


    const [selected, setSelected] = useState<Date>();

    return (
        <DayPicker
            showOutsideDays
            weekStartsOn={1}
            disabled={{ before: new Date() }}
            animate
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={
                selected
                    ? `You picked ${selected.toLocaleDateString()}.`
                    : "Please pick a date."
            }
            className="rdp-root"
        />
    );
}
