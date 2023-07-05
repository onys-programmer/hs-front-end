'use client';
const buttonConfig: {
    primary: {
        bgColor: string,
        color: string,
        outline: string,
    },
    secondary: {
        bgColor: string,
        color: string,
        outline: string,
    },
    small: string,
    medium: string,
    large: string,
    [key: string]: any, // 인덱스 시그니처 추가
} = {
    // Colors
    // TODO: Color 테마컬러로 바꾸기
    primary: {
        bgColor: 'bg-[#FDEEEA]',
        color: 'text-neutral-700',
        outline: 'border-primary-500 text-primary-500 bg-opacity-0 hover:bg-opacity-10',
    },
    secondary: {
        bgColor: 'bg-slate-600',
        color: 'text-white',
        outline: 'border-secondary-500 text-secondary-500 bg-opacity-0 hover:bg-opacity-10',
    },

    // Sizes
    small: 'px-3 py-2',
    medium: 'px-4 py-2',
    large: 'px-5 py-2',
};

interface ButtonProps {
    color?: string;
    size?: string;
    onClick?: Function;
    outlined?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
}

export default function Button({
    color = 'primary',
    size = 'small',
    onClick = () => {},
    outlined = true,
    children,
    disabled = false,
}: ButtonProps) {
    return (
        <>
            <div
                className={`
                    rounded-lg border-2 font-bold transition-all duration-100 focus:outline-none ${
                        buttonConfig[size]
                    } ${outlined && buttonConfig[color].outline} ${buttonConfig[color].bgColor} ${
                    buttonConfig[color].color
                }`}
                onClick={() => onClick()}
            >
                {children}
            </div>
        </>
    );
}
