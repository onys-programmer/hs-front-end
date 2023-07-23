import { Question } from '../../../constants/types/types';
import Answer from './Answer';

interface Props {
    question: Question;
}

export default function AnswerList({ question }: Props) {
    const handleClickChoiceAnswer = () => {
        // choice answer
    };
    return (
        <div className="flex flex-col justify-center placeholder-opacity-10">
            {question?.answer.map((choice, idx) => {
                return <Answer key={`${idx}` + choice} choice={choice} onClick={handleClickChoiceAnswer} />;
            })}
        </div>
    );
}
