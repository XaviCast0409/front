import React from "react";
import { FiGrid } from "react-icons/fi"; // Importa FiPlus para el icono de añadir
import { Trash, Add } from "../../../assets/Icons";

interface CardProps {
  title: string;
  descriptions: [{ id: number; name: string }] | [];
  idTrade: number;
  deleteFunction: (data: {
    ClassId: number,
    TradeCompanyUserId: number
  }) => void;
  refresh: () => void;
  setOpen: (value: boolean) => void;
  setTradeId: (value: number) => void;
  findClassTradeId: (data: string) => void;
  
}

const Card: React.FC<CardProps> = ({ title, descriptions, idTrade, deleteFunction, refresh, setOpen, setTradeId, findClassTradeId }) => {
  const handleDelete = (index: number) => {
    deleteFunction({ ClassId: index, TradeCompanyUserId: idTrade})
    setTimeout(() => {
      refresh();
    }, 500);
  };

  const handleAddClass = () => {
    // Implementa la lógica para agregar una nueva clase
    setTradeId(idTrade)
    findClassTradeId(title)
    setTimeout(() => {
      setOpen(true)
    }, 500);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
      <div className="bg-white p-6 rounded-lg shadow-tremor-card hover:shadow-tremor-dropdown transition duration-300 ease-in-out">
        <div className="flex items-center justify-between mb-4"> {/* Agregado justify-between para separar el título y el botón */}
          <div className="flex items-center">
            <span className="text-tremor-metric mr-2">
              <FiGrid />
            </span>
            <h3 className="text-tremor-title">{title}</h3>
          </div>
          <button onClick={handleAddClass} className="flex items-center text-tremor-default hover:text-tremor-metric">
            <Add />
          </button>
        </div>
        <h3 className="text-tremor-title">Classes</h3>
        <ul className="list-disc pl-5">
          {descriptions.map((item) => (
            <li key={item.id} className="flex justify-between items-center text-tremor-default">
              {item.name}
              <button onClick={() => handleDelete(item.id || 0)} className="text-red-500 hover:text-red-700">
                <Trash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
