import React, { useState } from 'react';
import { ChevronDown, Clock, MessageSquareQuote, User } from 'lucide-react';
import { EvidenceRecord } from '../types/hub';

interface EvidenceAccordionProps {
  evidence: EvidenceRecord[];
  namesLabel?: string;
  defaultOpen?: boolean;
}

/**
 * Single-access expandable verbatim interview evidence component:
 * «Leer respuestas de [nombres]».
 * Inside, immediately displays each interviewer question, literal quote excerpt,
 * participant attribution (name, role, timestamp), and their full literal answer in context.
 */
export default function EvidenceAccordion({
  evidence,
  namesLabel,
  defaultOpen = false,
}: EvidenceAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!evidence || evidence.length === 0) return null;

  const uniqueShortNames = Array.from(
    new Set(evidence.map((e) => e.shortName || e.participantName))
  );
  const computedNames =
    namesLabel ||
    (uniqueShortNames.length > 1
      ? `${uniqueShortNames.slice(0, -1).join(', ')} y ${uniqueShortNames[uniqueShortNames.length - 1]}`
      : uniqueShortNames[0]);

  return (
    <div className="mt-6 border-t border-indigo-400/20 pt-4">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-3 rounded-xl border border-indigo-400/30 bg-indigo-950/40 px-4 py-3 text-left text-sm font-semibold text-white transition-colors hover:border-indigo-400/60 hover:bg-indigo-900/50 cursor-pointer"
      >
        <span className="flex items-center gap-2.5">
          <MessageSquareQuote className="h-4 w-4 shrink-0 text-indigo-300" />
          <span>Leer respuestas de {computedNames}</span>
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-indigo-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3.5 space-y-4">
          {evidence.map((item) => (
            <figure
              key={item.id}
              className="m-0 rounded-2xl border border-[#2b415d] bg-[#0d192b]/95 p-4 sm:p-5 shadow-inner"
            >
              {/* Attribution Header: Participant Name, Role, Timestamp */}
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5 text-xs text-[#acc0d9]">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-200">
                    <User className="h-3.5 w-3.5 text-indigo-400" />
                    {item.participantName}
                  </span>
                  <span className="text-slate-500">·</span>
                  <span>{item.participantRole}</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] text-indigo-300">
                  <Clock className="h-3 w-3" />
                  {item.timestamp}
                </span>
              </figcaption>

              {/* Interviewer Question */}
              <p className="mt-3 mb-2 text-xs sm:text-[13px] font-medium leading-relaxed text-[#9fb6d2]">
                Pregunta: {item.question}
              </p>

              {/* Highlighted Verbatim Excerpt */}
              <blockquote className="m-0 my-2.5 border-l-3 border-indigo-400 pl-3.5 text-base sm:text-[17px] font-semibold leading-snug text-white">
                «{item.quote}»
              </blockquote>

              {/* Full Participant Answer in Context (Participant's literal voice) */}
              <div className="mt-3 rounded-xl border border-white/10 bg-[#081120] p-3.5 text-xs sm:text-sm leading-relaxed text-[#dbe7f6] whitespace-pre-line">
                {item.contextAnswer}
              </div>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
