import Button from './components/Button';

export default function Home() {
    return (
        <main className="">
            <div className="relative mx-auto h-screen max-w-md bg-[#FEF7EC] from-[#f8c6c9] via-[#fff2df] to-[#FFFCE6]">
                <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-gradient-to-t px-7">
                    <img src="/images/geori_gif.gif" alt="main animation" className="mx-auto" />
                    <Button outlined={false} size={'large'}>
                        시작하기
                    </Button>
                    <div className="mx-auto flex h-20 w-full flex-col justify-center bg-white text-center">
                        배너광고. 모래반지 빵야빵야
                    </div>
                </div>
            </div>
        </main>
    );
}
