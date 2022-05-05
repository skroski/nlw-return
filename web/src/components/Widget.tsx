import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm";

export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen);
    }
  return (
    <Popover className="absolute bottom-5 md:bottom-8 md:right-8 right-5 flex flex-col items-end">
    <Popover.Panel>
        <WidgetForm />
    </Popover.Panel>
      <Popover.Button onClick={toggleWidgetVisibility} className="icon-button group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        <span className="pl-2"></span>
            Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
