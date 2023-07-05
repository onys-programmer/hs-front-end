export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative mx-auto h-screen max-w-md bg-[#FEF7EC]">{children}</div>
        </>
    );
}
