"use client"

import { useState } from "react";
import PlusIcon from "../../assets/images/plus.svg";
import clsx from "clsx";
const items = [
  {
    question: "How does the pricing work for team",
    answer:
      "Team pricing typically involves a per-user, per-month rate that varies based on features and support level. Many platforms offer tiered plans, where larger teams receive volume discounts. Some include additional admin tools, integrations, and security features for teams.",
  },
  {
    question: "How does the pricing work for teams",
    answer:
      "Team pricing typically involves a per-user, per-month rate that varies based on features and support level. Many platforms offer tiered plans, where larger teams receive volume discounts. Some include additional admin tools, integrations, and security features for teams.",
  },
  {
    question: "How does the pricing work for teamss",
    answer:
      "Team pricing typically involves a per-user, per-month rate that varies based on features and support level. Many platforms offer tiered plans, where larger teams receive volume discounts. Some include additional admin tools, integrations, and security features for teams,",
  },
  {
    question: "How does the pricing work for teamm",
    answer:
      "Team pricing typically involves a per-user, per-month rate that varies based on features and support level. Many platforms offer tiered plans, where larger teams receive volume discounts. Some include additional admin tools, integrations, and security features for teams.",
  },
];
interface iAppProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: iAppProps) => {
  const [isOpen, setIsopen] = useState<boolean | undefined>(false);
  return (
    <div className="py-7 border-b border-white/30" onClick={()=>setIsopen((prev)=>!prev)}>
      <div className="flex items-center mb-2">
        <span className="flex-1 text-lg font-bold">{question}</span>
        <PlusIcon />
      </div>
      <div className={clsx({hidden:!isOpen,"":isOpen})}>{answer}</div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <div className=" text-white bg-gradient-to-b from-[#5d2ca8] to-black py-[72px]">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl sm:max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </div>
      </div>
    </div>
  );
};
