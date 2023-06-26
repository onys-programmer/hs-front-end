export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative h-screen max-w-md bg-slate-400 mx-auto">
        {children}
      </div>
    </>
  );
}
