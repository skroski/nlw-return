import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
    return(
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"> 
        <X weight="bold" className="w-6 h-6" />
        </Popover.Button>
    )
}