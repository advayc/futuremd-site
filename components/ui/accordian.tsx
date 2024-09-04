import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqData } from "@/lib/faqData";

export default function Tabs() {
  return (
    <Accordion variant="splitted" selectionMode="multiple">
      {faqData.faqs.map((item, index) => (
        <AccordionItem
          key={index + 1}
          aria-label={`Accordion ${index + 1}`}
          title={
            <div className="flex items-center justify-between ml-4">
              <span className="text-left dark:text-hov text-li">{item.question}</span>
            </div>
          }
          className="bg-bg border-2 rounded p-4 text-lg my-4 font-bold border-gray-300 dark:border-zinc-900 dark:text-hov text-li shadow-[0_0_250px_rgba(0,0,0,0.2)] hover:shadow-[0_0_550px_rgba(0,0,0,0.3)] transition-colors duration-300"
        >
          <div
            className="font-semibold text-base text-dark-text p-4 border-t-2 border-gray-300 dark:border-zinc-900 transition-colors duration-300"
            dangerouslySetInnerHTML={{ __html: item.answer }}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
