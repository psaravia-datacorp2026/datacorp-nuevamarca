import React, { useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  Search,
  X,
} from 'lucide-react';
import { STRATEGY_DOCUMENTS } from '../data/strategyData';
import { StrategyDocumentRecord } from '../types/hub';
import HeroCover from './HeroCover';
import ActionButton from './ActionButton';

interface StrategyViewProps {
  selectedDocIndex: number | null;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

function getMatchPreview(doc: StrategyDocumentRecord, term: string): string {
  if (!term) {
    for (const [type, content] of doc.blocks) {
      if (type === 'p' && typeof content === 'string') {
        return content.slice(0, 140) + (content.length > 140 ? '…' : '');
      }
      if (type === 't' && Array.isArray(content) && content.length > 1) {
        return `Tabla comparativa (${content[0].slice(0, 4).join(' · ')})`;
      }
    }
    return `Documento fuente: ${doc.source}`;
  }

  const lower = term.toLocaleLowerCase();
  for (const [type, content] of doc.blocks) {
    if ((type === 'p' || type === 'h') && typeof content === 'string') {
      const idx = content.toLocaleLowerCase().indexOf(lower);
      if (idx !== -1) {
        const start = Math.max(0, idx - 40);
        const end = Math.min(content.length, idx + term.length + 75);
        return (
          (start > 0 ? '…' : '') +
          content.slice(start, end) +
          (end < content.length ? '…' : '')
        );
      }
    } else if (type === 't' && Array.isArray(content)) {
      for (const row of content) {
        const joined = row.join(' · ');
        const idx = joined.toLocaleLowerCase().indexOf(lower);
        if (idx !== -1) {
          const start = Math.max(0, idx - 35);
          const end = Math.min(joined.length, idx + term.length + 75);
          return (
            'En tabla: ' +
            (start > 0 ? '…' : '') +
            joined.slice(start, end) +
            (end < joined.length ? '…' : '')
          );
        }
      }
    }
  }
  return `Coincidencia en ${doc.title} (${doc.source})`;
}

/**
 * ESTRATEGIA: Searchable repository of all 30 strategy documents & tables.
 * - Clean executive Spanish, hiding technical IDs and repetitive counts.
 * - Preserves search query when opening a result and returning.
 */
export default function StrategyView({
  selectedDocIndex,
  searchQuery,
  onSearchChange,
}: StrategyViewProps) {
  const normalizedQuery = searchQuery.toLocaleLowerCase().trim();

  const filteredDocs = useMemo(() => {
    if (!normalizedQuery) return STRATEGY_DOCUMENTS;
    return STRATEGY_DOCUMENTS.filter((doc) =>
      JSON.stringify(doc).toLocaleLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const groups = useMemo(() => {
    const unique = Array.from(new Set(filteredDocs.map((d) => d.group)));
    return unique.map((groupName) => ({
      name: groupName,
      items: filteredDocs.filter((d) => d.group === groupName),
    }));
  }, [filteredDocs]);

  const activeDoc =
    selectedDocIndex !== null && selectedDocIndex >= 0
      ? STRATEGY_DOCUMENTS[selectedDocIndex] || STRATEGY_DOCUMENTS[0]
      : null;

  // TOPIC READING VIEW (#estrategia/:index)
  if (activeDoc) {
    return (
      <div className="mx-auto mt-3 w-[min(94%,1370px)]">
        {/* Compact Context Line */}
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-teal-400/25 bg-[#0c1d2b]/90 px-4 py-2.5 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-2.5">
            <ActionButton variant="tertiary" size="sm" href="#estrategia">
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>
                {normalizedQuery
                  ? `Volver a resultados de «${searchQuery}»`
                  : 'Volver a Estrategia'}
              </span>
            </ActionButton>

            <span className="text-slate-600">/</span>

            <span className="rounded-full border border-teal-400/35 bg-teal-500/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-teal-200">
              {activeDoc.group}
            </span>

            <span className="text-xs sm:text-sm font-semibold text-white">
              {activeDoc.title}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-teal-200/90">
            <FileSpreadsheet className="h-3.5 w-3.5 text-teal-400" />
            <span>Fuente · {activeDoc.source}</span>
          </div>
        </div>

        {/* Workspace: Persistent Search & Topic Sidebar on Left + Document/Table Viewer on Right */}
        <div className="mt-3.5 grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(255px,0.33fr)_1fr]">
          <aside className="rounded-2xl border border-teal-500/25 bg-[#0d1a2d]/90 p-3.5">
            <div className="relative">
              <label htmlFor="strategy-sidebar-search" className="sr-only">
                Buscar en los documentos de estrategia
              </label>
              <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-teal-400" />
              <input
                id="strategy-sidebar-search"
                type="search"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Ej. cobertura, SEO, proveedores"
                className="w-full rounded-xl border border-teal-400/35 bg-[#081221] py-2 pr-8 pl-9 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-teal-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="mt-2.5 max-h-[66vh] space-y-2 overflow-y-auto pr-1 dc-matrix-scroll">
              {groups.length === 0 ? (
                <p className="p-3 text-xs text-slate-400">
                  Sin coincidencias para «{searchQuery}».
                </p>
              ) : (
                groups.map((grp) => {
                  const isOpen =
                    Boolean(normalizedQuery) || grp.name === activeDoc.group;
                  return (
                    <details
                      key={grp.name}
                      open={isOpen}
                      className="rounded-xl border border-white/10 bg-[#0a1424]/80 p-2"
                    >
                      <summary className="flex items-center justify-between px-1.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-300 cursor-pointer">
                        <span>{grp.name}</span>
                      </summary>
                      <div className="mt-1.5 grid gap-1">
                        {grp.items.map((item) => {
                          const isCurrent = item.legacyIndex === activeDoc.legacyIndex;
                          return (
                            <a
                              key={item.id}
                              href={`#estrategia/${item.legacyIndex}`}
                              aria-current={isCurrent ? 'page' : undefined}
                              className={`rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                                isCurrent
                                  ? 'bg-teal-900/80 text-white shadow-[inset_3px_0_0_#2dd4bf]'
                                  : 'text-[#cbd8e9] hover:bg-white/[0.06] hover:text-white'
                              }`}
                            >
                              {item.title}
                            </a>
                          );
                        })}
                      </div>
                    </details>
                  );
                })
              )}
            </div>
          </aside>

          {/* Document Body & Scrollable Native Tables */}
          <article className="dc-glass-card min-w-0 rounded-[24px] border-teal-400/30 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
              <div>
                <span className="inline-block rounded-full border border-teal-400/40 bg-teal-500/15 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-teal-200">
                  {activeDoc.group}
                </span>
                <h1 className="mt-2 text-[clamp(22px,2.4vw,30px)] font-semibold leading-tight text-white">
                  {activeDoc.title}
                </h1>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0a1426]/80 px-3 py-1.5 text-xs text-[#acc0d9]">
                <strong className="text-teal-300">Fuente:</strong> {activeDoc.source}
              </div>
            </div>

            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-[1.55] text-[#dbe7f6]">
              {activeDoc.blocks.map((block, bIdx) => {
                const [type, content] = block;
                if (type === 'h') {
                  return (
                    <h2
                      key={bIdx}
                      className="mt-5 first:mt-0 text-base sm:text-lg font-bold tracking-tight text-teal-200"
                    >
                      {content}
                    </h2>
                  );
                }
                if (type === 'p') {
                  return (
                    <p key={bIdx} className="m-0 leading-relaxed text-[#d8e5f5]">
                      {content}
                    </p>
                  );
                }
                if (type === 't' && Array.isArray(content) && content.length > 0) {
                  const headerRow = content[0];
                  const bodyRows = content.slice(1);
                  return (
                    <div
                      key={bIdx}
                      tabIndex={0}
                      role="region"
                      aria-label={`Tabla de ${activeDoc.title}`}
                      className="dc-matrix-scroll my-4 max-h-[64vh] overflow-auto rounded-xl border border-[#314461] bg-[#0b1526] shadow-inner"
                    >
                      <table className="w-full border-collapse text-left text-xs sm:text-[13.5px]">
                        <thead>
                          <tr>
                            {headerRow.map((cell, cIdx) => (
                              <th
                                key={cIdx}
                                scope="col"
                                className="sticky top-0 z-10 min-w-[135px] border border-[#314461] bg-[#17364d] px-3 py-2.5 font-bold text-teal-100"
                              >
                                {cell}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {bodyRows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="odd:bg-[#0f1d33]/90 even:bg-[#13243d]/75 hover:bg-teal-950/40"
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className="min-w-[135px] border border-[#283a54] px-3 py-2.5 align-top leading-relaxed text-[#e2ebf8]"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </article>
        </div>
      </div>
    );
  }

  // INDEX & SEARCH VIEW (#estrategia)
  return (
    <div>
      <HeroCover
        eyebrow="Documentación de estrategia"
        title="Arquitectura, diagnóstico y planes de transición"
        description="Consulta la propuesta de arquitectura de marca, el benchmark competitivo, el FODA y los planes de migración SEO y comunicacional."
        accent="teal"
      />

      <div className="mx-auto mt-5 w-[min(94%,1370px)]">
        {/* Search Bar */}
        <div className="rounded-2xl border border-teal-400/35 bg-[#0d1c2e]/95 p-4 sm:p-5 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label
              htmlFor="docSearch"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-200"
            >
              Buscar en documentos y matrices
            </label>
            {normalizedQuery && (
              <span className="text-xs font-medium text-teal-200">
                {filteredDocs.length} coincidencia(s) para «{searchQuery}»
              </span>
            )}
          </div>

          <div className="relative mt-2">
            <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-teal-400" />
            <input
              id="docSearch"
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Ej. cobertura, SEO, proveedores, arquitectura, FODA..."
              className="w-full rounded-xl border border-teal-400/40 bg-[#071120] py-2.5 pr-24 pl-11 text-sm sm:text-base text-white placeholder:text-slate-500 focus:border-teal-300"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute top-1/2 right-3 -translate-y-1/2 inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
                <span>Limpiar</span>
              </button>
            )}
          </div>
        </div>

        {/* Grouped Strategy Cards / Search Results */}
        <div className="mt-6 space-y-7">
          {groups.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-[#0e1a2f]/80 p-8 text-center">
              <p className="text-base font-medium text-white">
                No se encontraron documentos que coincidan con «{searchQuery}».
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Prueba con términos como «cobertura», «SEO», «proveedores», «FODA» o «Gantt».
              </p>
            </div>
          ) : (
            groups.map((grp) => (
              <section key={grp.name} aria-label={`Categoría ${grp.name}`}>
                <div className="mb-3 flex items-center gap-2 border-b border-teal-400/20 pb-2">
                  <FolderOpen className="h-4 w-4 text-teal-400" />
                  <h2 className="text-lg font-semibold text-white">{grp.name}</h2>
                </div>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {grp.items.map((doc) => {
                    const hasTable = doc.blocks.some(([t]) => t === 't');
                    const preview = getMatchPreview(doc, searchQuery);

                    return (
                      <a
                        key={doc.id}
                        href={`#estrategia/${doc.legacyIndex}`}
                        className="group dc-glass-card flex flex-col justify-between rounded-2xl border-teal-400/25 p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-teal-300/65 hover:shadow-[0_16px_38px_-18px_rgba(20,184,166,0.45)]"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 text-xs text-teal-300">
                            <span className="inline-flex items-center gap-1.5 font-medium text-slate-300">
                              {hasTable ? (
                                <FileSpreadsheet className="h-3.5 w-3.5 text-teal-400" />
                              ) : (
                                <FileText className="h-3.5 w-3.5 text-teal-400" />
                              )}
                              <span className="truncate max-w-[210px]">{doc.source}</span>
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-teal-300 transition-transform duration-150 group-hover:translate-x-1" />
                          </div>

                          <h3 className="mt-2.5 text-base sm:text-[17px] font-semibold text-white group-hover:text-teal-200">
                            {doc.title}
                          </h3>

                          <p className="mt-1.5 text-xs sm:text-[13.5px] leading-[1.48] text-[#c2d3e8]">
                            {preview}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
