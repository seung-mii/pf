import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto p-4 sm:p-8 text-center font-serif text-[#1A2B3C]">
      <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-6">The page you are looking for does not exist.</p>
      <Link 
        href="/" 
        className="p-3 px-5 bg-[#6F94B0] text-white rounded-[20px] transition-transform duration-500">
        Home 페이지로 돌아가기
      </Link>
    </div>
  );
}