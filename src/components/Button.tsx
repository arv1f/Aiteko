interface Button {
    falseOrTrue: number;
    onClick: (falseOrTrue: number) => void;
    inText: string;
}
const MyVeryButton = ({ onClick, falseOrTrue, inText } : Button) => {
    return(
    <button onClick={()=>onClick(falseOrTrue)}>
        {inText}
    </button>)
};
export default MyVeryButton;