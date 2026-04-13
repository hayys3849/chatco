export default function CommuterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full h-full lg:w-screen lg:h-screen lg:max-w-7xl lg:max-h-[900px] bg-white lg:rounded-2xl lg:shadow-2xl overflow-hidden">
        {children}
      </div>
    </main>
  );
}