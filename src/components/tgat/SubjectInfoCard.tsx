import { FileText, ClipboardList, BarChart2, Clock, List } from 'lucide-react';

interface SubjectInfoProps {
  title: string;
  subjectName: string;
  setNumber: string;
  questionCount: string;
  duration: string;
}

export default function SubjectInfoCard({
  title,
  subjectName,
  setNumber,
  questionCount,
  duration
}: SubjectInfoProps) {
  return (
    <div className="rounded-xl border border-[#d6e4ff] bg-white overflow-hidden shadow-sm">
      <div className="bg-[#f0f7ff] flex items-center text-[#1e3a8a] py-3 px-5">
        <List className="w-6 h-6 mr-3" strokeWidth={2.5} />
        <h2 className="text-xl font-bold">คำอธิบาย</h2>
      </div>

      <div className="flex flex-col space-y-3.5 text-[#334155] text-sm sm:text-base p-5">
        <div className="flex items-start">
          <FileText className="w-5 h-5 mr-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-1">
            <span className="w-20 sm:w-24 flex-shrink-0  font-bold">รายวิชา</span>
            <span className="mr-3">:</span>
            <span>{title} {subjectName}</span>
          </div>
        </div>

        <div className="flex items-start">
          <ClipboardList className="w-5 h-5 mr-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-1">
            <span className="w-20 sm:w-24 flex-shrink-0 font-bold">ลำดับชุด</span>
            <span className="mr-3">:</span>
            <span>{setNumber}</span>
          </div>
        </div>

        <div className="flex items-start">
          <BarChart2 className="w-5 h-5 mr-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-1">
            <span className="w-20 sm:w-24 flex-shrink-0 font-bold">จำนวนข้อ</span>
            <span className="mr-3">:</span>
            <span>{questionCount}</span>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-5 h-5 mr-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
          <div className="flex flex-1">
            <span className="w-20 sm:w-24 flex-shrink-0 font-bold">ความยาว</span>
            <span className="mr-3">:</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
