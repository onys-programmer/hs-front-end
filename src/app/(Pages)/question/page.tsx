'use client';

import { useEffect, useState } from 'react';
import Question from '../../components/question/Question';
import ProgressBar from '@/app/components/question/ProgressBar';
import Button from '@/app/components/Button';

export default function Home() {
    const [page, setPage] = useState(1);
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const question = async () => {
            const res = await fetch('http://localhost:3000/api/question');
            const data = await res.json();
            setQuestions(data.questions);
        };
        question();
    }, []);

    const maxPage = questions.length;

    const handleClickPrev = () => {
        setPage(page - 1);
    };

    const handleClickNext = () => {
        setPage(page + 1);
    };

    const question = questions[page - 1];

    return (
        <div className="flex h-full flex-col items-center justify-center">
            <ProgressBar page={page} maxPage={maxPage} />
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
