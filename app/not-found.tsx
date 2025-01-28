import Link from "next/link";

export default function NotFound() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen max-w-5xl mx-auto p-4 sm:p-8 text-center font-noto text-fontColor cursor-circle">
        <h1 className="text-2xl font-normal mb-4">Page Not Found</h1>
        <Link href="/" className="p-3 px-5 bg-backGround bg-fontColor text-darkBlue border-thin border-fontColor border-solid rounded-[20px] transition-transform duration-500 cursor-circleHover">
          Go Back
        </Link>
      </div>
  );
}