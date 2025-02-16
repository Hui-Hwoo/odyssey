import { ReactNode } from "react";
import { XCircle } from "@phosphor-icons/react";
import "./hmodal.css";

interface HModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const HModal = (props: HModalProps): JSX.Element => {
    const { isOpen, onClose } = props;

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="hmodal-container">
                    <div
                        className="hmodal-overlay"
                        onClick={handleClickOutside}
                    >
                        <div className="hmodal-body-container">
                            <div className="hmodal-close-btn" onClick={onClose}>
                                <XCircle size={24} />
                            </div>
                            <div className="hmodal-body">{props.children}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
