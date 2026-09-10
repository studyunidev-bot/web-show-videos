export default function ShopCTA({ url }: { url?: string }) {
  if (!url) return null;
  
  return (
    <div className="mt-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 text-center">
      <h3 className="text-xl font-bold text-orange-800 mb-2">
        ต้องการฝึกฝนเพิ่มเติม?
      </h3>
      <p className="text-orange-700 mb-5">
        สั่งซื้อหนังสือเตรียมสอบ TGAT ฉบับสมบูรณ์ได้เลย
      </p>
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#EE4D2D] hover:bg-[#d74325] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm focus:ring-4 focus:ring-orange-300 focus:outline-none w-full sm:w-auto"
      >
        สั่งซื้อผ่าน Shopee
      </a>
    </div>
  );
}
