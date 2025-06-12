import type { Route } from "./+types/post";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Post Page" },
    { name: "description", content: "Test post page" },
  ];
}

export default function Post() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-8 min-h-0 max-w-2xl">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Page
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            これはテスト用のPostページです。
          </p>
        </header>
        
        <div className="w-full space-y-6 px-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
              React Router経由でアクセス成功！
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              このページは React Router で作成されています
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="/react-router/" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              ホームに戻る
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}