interface Props {
  handleNextClick: (id: number) => void;
  name: string;
  id: number
}
export const CardTrade: React.FC<Props> = ({ handleNextClick, name, id }) => {
  return (
    <button
    type='button'
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => handleNextClick(id)}
  >
    {name}
  </button>
  )
}