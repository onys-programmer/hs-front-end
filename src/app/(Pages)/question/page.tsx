'use client';

import { useEffect, useState } from 'react';
import Question from '../../components/question/Question';
import ProgressBar from '@/app/components/question/ProgressBar';
import Button from '@/app/components/Button';

export default function Home() {
    //TODO: recoil로 이동
    const [page, setPage] = useState(1);
    const [questions, setQuestions] = useState([]);
    const maxPage = questions.length;
    const question = questions[page - 1];
    const handleClickPrev = () => {
        if (page < 1) {
            return;
        }
        setPage(page - 1);
    };

    const handleClickNext = () => {
        if (page >= maxPage) {
            return;
        }
        setPage(page + 1);
    };

    //TODO: 추후 react-query로 api 변경
    useEffect(() => {
        const question = async () => {
            const res = await fetch('http://localhost:3000/api/question');
            const data = await res.json();
            setQuestions(data.questions);
        };
        question();
    }, []);

    return (
        <div className="flex h-full flex-col items-center bg-gradient-to-t from-[#f8c6c9] via-[#fff2df] to-[#FFFCE6] pt-4 font-KBIZ">
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
