export default function Button({ 
    title, 
    textColor, 
    bgColor, 
    onClick, 
    disabled }) {
    return (
        <button
            disabled={disabled}
            className={`py-2 px-10 rounded ${disabled ? 'bg-gray-300' : bgColor ? bgColor : 'bg-blue-600'} ${textColor ? textColor : 'text-white'}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
