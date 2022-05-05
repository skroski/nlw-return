import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,

    }: FeedbackContentStepProps) {
    const feedbackInfo = feedbackTypes[feedbackType];


    return (
        <>
          <header>
              <button 
              type="button" 
              className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
              onClick={onFeedbackRestartRequested}
              >
                  <ArrowLeft weight="bold" className="w-4 h-4" />
              </button>
            <span className="text-white text-2xl leading-6 flex items-center gap-2">
            <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt} className="w-6 h-6" />
             {feedbackInfo.title}
            </span>
            <CloseButton />
          </header>
          <form className="flex flex-col gap-2 w-full">
              <textarea 
              className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100  border-zinc-600 bg-transparent rounded-md border-2 p-2 focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none"
              placeholder="Conte com detalhes o que está acontecendo..."/>
          </form>
        </>
      );
}