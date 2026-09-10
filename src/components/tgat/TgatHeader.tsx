export default function TgatHeader() {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 shadow-sm z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-14">
        {/* Placeholder for Logo matching the reference colors */}
        <div className="flex items-center justify-center space-x-3">
          <div className="flex space-x-1 items-end h-8">
            <div className="w-2.5 h-6 bg-orange-500 rounded-t-full rounded-b-sm"></div>
            <div className="w-2.5 h-8 bg-blue-700 rounded-t-full rounded-b-sm"></div>
            <div className="w-2.5 h-5 bg-yellow-400 rounded-t-full rounded-b-sm"></div>
          </div>
          <div className="flex flex-col pt-1">
            <span className="text-xl font-bold text-[#1e3a8a] leading-none tracking-tight">เรียนต่อมหาลัย</span>
            <span className="text-[10px] font-bold text-[#1e3a8a] tracking-[0.15em] mt-0.5">EDUCATION LEARNING CENTER</span>
          </div>
        </div>
      </div>
    </header>
  );
}
