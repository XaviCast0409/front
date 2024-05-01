import InputField from "../../../utils/InputField";
import MultiSelect from "../../../utils/MiltiSelect";
import { Dispatch, SetStateAction } from "react";
import { ClassAttributes } from "storeType";

interface ModalConterTradeProps {
  setClassTrade: Dispatch<SetStateAction<{ value: number; label: string }[]>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classTrade: { value: number; label: string }[];
  classes: ClassAttributes[];
}

export const ModalConterTrade: React.FC<ModalConterTradeProps> = ({
  setClassTrade,
  classTrade,
  handleChange,
  classes,
}) => {
  const filterAttributes = classes.map((item) => ({
    value: item.id || 0,
    label: String(item.name).toUpperCase() || "",
  }));
  return (
    <div className="grid grid-cols-12 gap-5 pt-5">
      <InputField
        placeholder="Trade Name"
        name="name"
        onChange={handleChange}
        type="text"
        xlColSpan="xl:col-span-12"
        labelText="Trade Name"
        requiredText="Trade Name is required"
      />
      <div className="xl:col-span-12">
        <MultiSelect
          options={filterAttributes}
          name="trade"
          setState={setClassTrade}
          selected={classTrade}
        />
      </div>
    </div>
  );
};
