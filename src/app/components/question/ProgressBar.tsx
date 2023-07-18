interface ProgressBarProps {
    page: number;
    maxPage: number;
}

export default function ProgressBar({ page, maxPage }: ProgressBarProps) {
    const progress = (page / maxPage) * 100;
    return (
        <>
            <div className="mt-2 h-5 w-full bg-geori-blue">
                <div className={'relative h-5 bg-geori-primary'} style={{ width: `${progress}%` }}>
                    <div className={'absolute end-0 flex h-5 bg-geori-success text-white'}>{progress}</div>
                </div>
            </div>
        </>
    );
}
