import { FC } from "react";

type Variant = 'star'

interface Icon {
    variant: Variant;
    color: string;
}

export const Icon: FC<Icon> = ({ variant, color }) => {
    switch (variant) {
        case 'star':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12 19.64 9.04999L14.81 8.64L12.92 4.17999C12.58 3.36999 11.42 3.36999 11.08 4.17999L9.19 8.62999L4.36 9.03999C3.48 9.10999 3.12 10.21 3.79 10.79L7.46 13.97L6.36 18.69C6.16 19.55 7.09 20.23 7.85 19.77L12 17.27Z" fill={color} />
                </svg>
            )
    }
}