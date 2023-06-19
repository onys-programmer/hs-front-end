import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        console.log('hi!');
    }, []);
    return (
        <>
            <div className="w-full h-full bg-red-100">
                dd
            </div>
        </>
    );
}
