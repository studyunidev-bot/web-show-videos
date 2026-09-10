import { TgatSection } from '@/types/tgat';
import { List } from 'lucide-react';

interface ContentOutlineProps {
  sections: TgatSection[];
  activeTimestamp: number | null;
  onChapterClick: (timestamp: number) => void;
}

export default function ContentOutline({ sections, activeTimestamp, onChapterClick }: ContentOutlineProps) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="rounded-xl border border-[#d6e4ff] bg-white overflow-hidden shadow-sm">
      <div className="bg-[#f0f7ff] flex items-center text-[#1e3a8a] py-3 px-5">
        <List className="w-6 h-6 mr-3" strokeWidth={2.5} />
        <h2 className="text-xl font-bold">เนื้อหา</h2>
      </div>

      <div className="p-5 space-y-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <div className="bg-[#f0f7ff] text-[#1e3a8a] px-3 py-1.5 rounded-md text-sm sm:text-base font-semibold mb-3 w-full">
                {section.title} {section.subtitle && `(${section.subtitle})`}
              </div>

            )}


            <div className="relative ml-2 mt-1">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-[14px] bottom-[14px] w-0.5 bg-[#1e3a8a]"></div>

              <ul className="relative">
                {section.items.map((item, itemIdx) => {
                  const isActive = activeTimestamp === item.timestamp;

                  return (
                    <li key={itemIdx} className="relative z-10 mb-0.5 last:mb-0">
                      <button
                        onClick={() => onChapterClick(item.timestamp)}
                        className={`relative w-full text-left pl-7 pr-2 py-1.5 rounded-md transition-colors outline-none text-sm sm:text-base ${isActive
                          ? 'bg-[#d1e3ff]/60 font-medium'
                          : 'hover:bg-[#e0edff]/60'
                          }`}
                        aria-current={isActive ? 'true' : 'false'}
                      >
                        {/* Dot */}
                        <div className={`absolute left-[5.5px] top-[13px] w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#1e3a8a] ring-4 ring-[#d1e3ff]' : 'bg-[#1e3a8a]'
                          }`}></div>

                        <div className={`flex flex-wrap ${isActive ? 'text-[#1e3a8a]' : 'text-[#334155]'}`}>
                          <span className="w-[80px] sm:w-[80px] text-sm flex-shrink-0">{item.label}</span>
                          <span className="mx-2">:</span>
                          <span className="flex-1">{item.description}</span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
