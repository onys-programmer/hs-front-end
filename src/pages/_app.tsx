import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Noto_Sans_KR, Roboto } from 'next/font/google';

import MainContainer from '../components/MainContainer';

const notoSansKr = Noto_Sans_KR({
    preload: false,
    weight: ['100', '400', '700'],
});

const roboto = Roboto({
    preload: false,
    weight: ['100', '400', '700'],
    variable: '--roboto',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={[notoSansKr.className, roboto.variable].join(' ')} >
            <MainContainer>
                <Component {...pageProps} />
            </MainContainer>
        </main>
    );
}
