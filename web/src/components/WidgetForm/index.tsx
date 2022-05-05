import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um Bug",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma Lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: { 
        source: thoughtImageUrl, 
        alt: "Imagem de uma balão de pensamento" 
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
      setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col justify-center items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     
      {!feedbackType ? (
         <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
         <FeedbackContentStep 
         feedbackType={feedbackType}
         onFeedbackRestartRequested={handleRestartFeedback}

          />
      )}
      <footer className="text-xs text-neutral-400">
        Feito por skroski com muito comprometimento.
      </footer>
    </div>
  );
}