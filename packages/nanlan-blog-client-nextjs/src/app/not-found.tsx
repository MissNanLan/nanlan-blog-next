export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-4 text-lg text-gray-600">页面不存在</p>
      </div>
    </div>
  );
}

NotFound.displayName = "NotFound";
