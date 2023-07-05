import { Question } from '../../../constants/types/types';
import Choice from './Choice';

interface Props {
    question: Question;
    onClickPrev: () => void;
    onClickNext: () => void;
}

export default function Question({ question, onClickPrev, onClickNext }: Props) {
    const { title, body, answer } = question;
    const handleClickChoiceAnswer = () => {
        // choice answer
    };
    console.log(question);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="">
                <h2>{title}</h2>
            </div>
            <div className="">
                <p>{body}</p>
            </div>
            {answer.map((choice, idx) => {
                return <Choice key={`${idx}` + choice} choice={choice} onClick={handleClickChoiceAnswer} />;
            })}
        </main>
    );
}
