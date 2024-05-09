interface Props {
  handleNextClick: (id: number) => void;
  name: string;
  id: number
}
export const CardTrade: React.FC<Props> = ({ handleNextClick, name, id }) => {
  return (
    <button
    type='button'
    className="btn-primary"
    onClick={() => handleNextClick(id)}
  >
    {name}
  </button>
  )
}