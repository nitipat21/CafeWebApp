import { FC } from "react";

interface buttonProps {
    children: React.ReactNode;
    border?: string;
    backgroundColor?: string;
    color?:string
    onClick: () => void;
}

const Button:FC<buttonProps> = ({children, border, backgroundColor, color, onClick}) => {

    return (
        <div className="button">
            <button onClick={onClick} style={{border: border, backgroundColor: backgroundColor, color:color}}>{children}</button>
        </div>
    );
}

export default Button;