import Image from "next/image";

export default function TgatHeader() {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 shadow-sm z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-14">
        <Image
          src="/images/logo.webp"
          alt="logo-tgat"
          width={180}
          height={180}
          priority
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </header>
  );
}
