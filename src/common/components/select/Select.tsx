'use client';
import * as React from "react";
import classnames from "classnames";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./styles.css";
import * as Select from '@radix-ui/react-select';

// Компонент SelectItem с правильной типизацией
const SelectItem = React.forwardRef<
    HTMLDivElement, // Тип элемента, к которому прикрепляется ref
    { value: string; children: React.ReactNode; className?: string } // Пропсы для SelectItem (с className)
>(({ children, value, className, ...props }, forwardedRef) => {
    return (
        <Select.Item
            className={classnames("SelectItem", className)}
            {...props}
            value={value}
            ref={forwardedRef}
        >
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

const SelectDemo = () => (
    <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label="Food">
            <Select.Value placeholder="Select a fruit…" />
            <Select.Icon className="SelectIcon">
                <ChevronDownIcon />
            </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
            <Select.Content className="SelectContent">
                <Select.ScrollUpButton className="SelectScrollButton">
                    <ChevronUpIcon />
                </Select.ScrollUpButton>
                <Select.Viewport className="SelectViewport">
                    <Select.Group>
                        <Select.Label className="SelectLabel">Fruits</Select.Label>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </Select.Group>

                    <Select.Separator className="SelectSeparator" />

                    <Select.Group>
                        <Select.Label className="SelectLabel">Vegetables</Select.Label>
                        <SelectItem value="aubergine">Aubergine</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="carrot">
                            Carrot
                        </SelectItem>
                        <SelectItem value="courgette">Courgette</SelectItem>
                        <SelectItem value="leek">Leek</SelectItem>
                    </Select.Group>

                    <Select.Separator className="SelectSeparator" />

                    <Select.Group>
                        <Select.Label className="SelectLabel">Meat</Select.Label>
                        <SelectItem value="beef">Beef</SelectItem>
                        <SelectItem value="chicken">Chicken</SelectItem>
                        <SelectItem value="lamb">Lamb</SelectItem>
                        <SelectItem value="pork">Pork</SelectItem>
                    </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDownIcon />
                </Select.ScrollDownButton>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
);

export default SelectDemo;
