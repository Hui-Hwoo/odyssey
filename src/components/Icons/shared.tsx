import {
    NumberSquareZero,
    NumberSquareOne,
    NumberSquareTwo,
    NumberSquareThree,
    NumberSquareFour,
    NumberSquareFive,
    NumberSquareSix,
    NumberSquareSeven,
    NumberSquareEight,
    NumberSquareNine,
} from "@phosphor-icons/react";
import "./icons.css";

export const getIndexIcon = (index: number) => {
    if (index >= 10) {
        const digitArray = index.toString().split("").map(Number);
        return (
            <div className="digit-container">
                {digitArray.map((digit) => (
                    <div key={digit}>{getIndexIcon(digit)}</div>
                ))}
            </div>
        );
    }

    const digitSize = 20;
    switch (index) {
        case 0:
            return <NumberSquareZero size={digitSize} />;
        case 1:
            return <NumberSquareOne size={digitSize} />;
        case 2:
            return <NumberSquareTwo size={digitSize} />;
        case 3:
            return <NumberSquareThree size={digitSize} />;
        case 4:
            return <NumberSquareFour size={digitSize} />;
        case 5:
            return <NumberSquareFive size={digitSize} />;
        case 6:
            return <NumberSquareSix size={digitSize} />;
        case 7:
            return <NumberSquareSeven size={digitSize} />;
        case 8:
            return <NumberSquareEight size={digitSize} />;
        case 9:
            return <NumberSquareNine size={digitSize} />;
        default:
            return <div></div>;
    }
};
