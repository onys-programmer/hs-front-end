'use client';

import { useState } from 'react';
import Question from './Question';
import { questions } from '@/__fixtures__/question';
import Button from '@/app/components/Button';

export default function Home() {
    const [page, setPage] = useState(1);
    const handleClickPrev = () => {
        setPage(page - 1);
    };
    const handleClickNext = () => {
        setPage(page + 1);
    };
    const question = questions[page - 1];
    const maxPage = questions.length;
    return (
        <div className="flex h-fit w-screen flex-col items-center justify-center">
            <div>Q</div>
            <div className="">
                {page}/{maxPage}
            </div>
            <Question question={question} onClickPrev={handleClickPrev} onClickNext={handleClickNext} />
            <div className="flex w-60 justify-between">
                <Button onClick={handleClickPrev} disabled={page === 1}>
                    이전문제
                </Button>
                <Button onClick={handleClickNext} disabled={page === maxPage}>
                    다음문제
                </Button>
            </div>
        </div>
    );
}
