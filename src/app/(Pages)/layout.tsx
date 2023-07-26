export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative mx-auto h-screen max-w-md bg-[#FEF7EC] from-[#f8c6c9] via-[#fff2df] to-[#FFFCE6]">
                {children}
            </div>
        </>
    );
}
