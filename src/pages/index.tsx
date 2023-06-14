import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        console.log('hi!');
    }, []);
    return (
        <>
            <div>거리</div>
            <div className="font-roboto">거리</div>
        </>
    );
}
