import { Question } from '../../../constants/types/types';
import Choice from './Choice';

interface Props {
    question: Question;
    onClickPrev: () => void;
    onClickNext: () => void;
}

export default function Question({ question, onClickPrev, onClickNext }: Props) {
    const handleClickChoiceAnswer = () => {
        // choice answer
    };
    return (
        <div className="flex h-fit flex-col items-center justify-between p-24">
            <div className="">
                <h2>{question?.title}</h2>
            </div>
            <div className="">
                <p>{question?.body}</p>
            </div>
            {question?.answer.map((choice, idx) => {
                return <Choice key={`${idx}` + choice} choice={choice} onClick={handleClickChoiceAnswer} />;
            })}
        </div>
    );
}
