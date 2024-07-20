import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ColorBlockPropsType } from "../../types";

const ColorBlock = (props: ColorBlockPropsType) => {
    const [copied, setCopied] = useState(false);

    const iconDuration = 2000;
    const divStyle = {
        backgroundColor: props.color,
    };

    const handleClick = () => {
        navigator.clipboard.writeText(props.color);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, iconDuration);
    };

    return (
        <div onClick={handleClick} style={divStyle} className="color-block">
            {copied ? (
                <>
                    <p className="font-semibold">Copied </p>
                    <FaCheckCircle
                        className={`w-5 h-5 ml-1 text-${
                            props.mode === "dark" ? "white" : "black"
                        }`}
                    />{" "}
                </>
            ) : (
                <h2>{props.color}</h2>
            )}
        </div>
    );
};

export default ColorBlock;
