export default function MainLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <main className="w-full md:w-[70%]">{left}</main>
        <aside className="w-full md:w-[30%]">{right}</aside>
      </div>
    </div>
  );
}
