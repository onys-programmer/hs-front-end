interface ProgressBarProps {
    page: number;
    maxPage: number;
}

export default function ProgressBar({ page, maxPage }: ProgressBarProps) {
    console.log(page);
    console.log(maxPage);
    return (
        <>
            <div className="mt-2 h-4 w-full bg-geori-blue">
                <div className={`h-4 w-10 bg-geori-primary`}></div>
            </div>
        </>
    );
}
