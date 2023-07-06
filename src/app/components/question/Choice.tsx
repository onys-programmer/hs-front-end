import Button from '@/app/components/Button';

interface Props {
    choice: string;
    onClick: () => void;
}

export default function Choice({ choice, onClick }: Props) {
    return (
        <Button>
            <p>{choice}</p>
        </Button>
    );
}
