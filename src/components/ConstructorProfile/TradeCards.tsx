import { FaBuilding } from "react-icons/fa";
import { useState } from "react";

interface TradeProps {
  name?: string;
  setTradeId?: React.Dispatch<React.SetStateAction<number[]>>;
  tradeId?: number;
}

export const TradeCards: React.FC<TradeProps> = ({
  name,
  setTradeId,
  tradeId
}) => {
  const [tradeIdChecked, setTradeIdChecked] = useState<boolean>(false);
  
  return (
    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg hover:bg-orange-600 transition duration-300">
      <FaBuilding className="text-white w-16 h-16 absolute top-2 right-2" />
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <img className="relative w-40" src="icono_url_1" alt="" />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <div className="flex justify-between items-center">
          <span className="block font-semibold text-xl">{name}</span>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={tradeIdChecked}
              onChange={(event) => {
                const isChecked = event.target.checked;
                if (isChecked) {
                  if (typeof tradeId !== "undefined" && setTradeId) {
                    setTradeId((prevState) => [...(prevState || []), tradeId]);
                  }
                } else {
                  if (setTradeId) {
                    setTradeId((prevState) =>
                      prevState ? prevState.filter((id) => id !== tradeId) : []
                    );
                  }
                }
                setTradeIdChecked(isChecked);
              }}
              className="form-checkbox h-6 w-6 text-orange-500 rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-orange-500"
            />
            <span className="ml-2 text-white">Select</span>
          </label>
        </div>
      </div>
    </div>
  );
};
