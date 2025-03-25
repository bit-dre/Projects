'use client';
import { useState } from "react"

const accordionData = [
    {id: 1, title: "accordion 1", content: "Lorem deez nuts"},
    {id: 2, title: "accordion 2", content: "Lorem deez nuts"},
    {id: 3, title: "accordion 3", content: "Lorem deez nuts"},
    {id: 4, title: "accordion 4", content: "Lorem deez nuts"},
]

function AccordionItem({title, content, isExpanded, onToggle}) {
    return (
        <div className={`bg-white border-1 border-black rounded-3xl overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96" : "max-h-20"}`}>
            <div className="flex justify-between items-start p-6 cursor-pointer"
                 onClick={onToggle}>
                <div className="text-black text-2xl font-bold">
                    {title}
                </div>
                <i className={`text-black font-bold text-4xl transition-all duration-300 ${isExpanded ? "rotate-90" : ""}`}>
                    {'>'}
                </i>
            </div>
            <div className={`text-black px-5 pb-5 overflow-hidden transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}>
                {content}
            </div>
        </div>
    )
}
export default function Accordion() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    }
    return (
        <div className="items-center justify-center p-8">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
                {accordionData.map((item) => (
                    <AccordionItem 
                        key={item.id}
                        {...item}
                        isExpanded={expandedId === item.id}
                        onToggle={() => toggleExpand(item.id)}
                        />
                ))}
            </div>
        </div>
    )
}
