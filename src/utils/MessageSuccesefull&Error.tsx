import { MessageProps } from "utils";


const MessageSuccessAndError: React.FC<MessageProps> = ({ type, message, additionalText }) => {
    const alertClasses = type === 'success' ? 'bg-green-100 border-t border-b border-green-500 text-green-700' : 'bg-red-100 border-t border-b border-red-500 text-red-700';

    return (
        <div className='m-12 space-y-6'>
            <div className={`${alertClasses} px-4 py-3`} role="alert">
                <p className="font-bold">{message}</p>
                {additionalText && <p className="text-sm">{additionalText}</p>}
            </div>
        </div>
    );
};

export default MessageSuccessAndError;