import { Link } from "react-router-dom";
interface ModalProps {
  message: string;
  isSuccess: boolean;
  handleFunction: () => void;
  link?: string;
}

export const Modal: React.FC<ModalProps> = ({ message, isSuccess, handleFunction, link }) => {
  console.log(message);
  
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}>
      <div className={`bg-white rounded-lg p-6 ${isSuccess ? 'bg-green-200' : 'bg-red-200'}`}>
        <div className="flex justify-center mb-4">
          {isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zM9 14a1 1 0 001.7.7l5-5a1 1 0 00-1.4-1.4L9 11.6l-2.3-2.3a1 1 0 00-1.4 1.4l3 3a1 1 0 001.4 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 20a10 10 0 100-20 10 10 0 000 20zM9 7a1 1 0 012 0v5a1 1 0 01-2 0V7zm2 9a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
            </svg>
          )}
          <span className="font-semibold text-blue-600">{message}</span>
        </div>
        <Link to={`${link}`}>
        <button type='button' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleFunction()}>
          Cerrar
        </button>
        </Link>
      </div>    
    </div>
  );
};

