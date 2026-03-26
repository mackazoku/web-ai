export default function AdminServicesLoading() {
  return (
    <div className="min-h-screen bg-[#faf9f8] px-8 py-12 md:px-16">
      <div className="animate-pulse space-y-10">
        <div className="space-y-4">
          <div className="h-4 w-40 rounded-full bg-[#e3e2e1]" />
          <div className="h-10 w-2/3 rounded-full bg-[#e3e2e1]" />
          <div className="h-4 w-1/2 rounded-full bg-[#f4f3f2]" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({length: 3}).map((_, index) => (
            <div
              key={`card-${index}`}
              className="h-64 rounded-3xl bg-white shadow-[0_32px_32px_-4px_rgba(26,28,28,0.06)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
