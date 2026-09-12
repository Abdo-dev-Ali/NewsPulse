"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-bold mb-2">حصل خطأ غير متوقع</h1>
      <p className="text-gray-600 mb-6">
        مش قادرين نجيب الأخبار دلوقتي، جرب تاني بعد شوية.
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 hover:scale-110 cursor-pointer active:scale-95 transition"
      >
        حاول تاني
      </button>
    </main>
  );
}
