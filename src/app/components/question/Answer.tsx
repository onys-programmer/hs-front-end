import Button from '@/app/components/Button';

interface Props {
    choice: string;
    onClick: () => void;
}

export default function Answer({ choice, onClick }: Props) {
    return (
        <div className="pt-3">
            <Button>
                <p>{choice}</p>
            </Button>
        </div>
    );
}
