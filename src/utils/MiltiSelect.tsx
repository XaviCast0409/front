import Select, { Theme } from "react-select";
import makeAnimated from "react-select/animated";
import { Dispatch, SetStateAction } from "react";

const animatedComponents = makeAnimated();

interface ClassOption {
  value: number;
  label: string;
}
interface MultiSelectProps {
  options: ClassOption[];
  name: string;
  setState: Dispatch<SetStateAction<{ value: number; label: string }[]>>;
  selected: { value: number; label: string }[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  name,
  setState,
  selected,
}) => {
  const customStyles = {
    control: (base: object, state: { isFocused: boolean }) => ({
      ...base,
      fontSize: "15px",
      height: "50px",
      width: "500px",
      borderRadius: 4,
      borderColor: state.isFocused ? "#1a7275" : "rgb(203 213 225 / 1)",
    }),
    container: (base: object) => ({
      ...base,
      fontSize: "12px",
      borderRadius: 6,
    }),
    indicatorSeparator: (base: object) => ({
      ...base,
      margin: "0px",
    }),
    clearIndicator: (base: object) => ({
      ...base,
      marginTop: "-6px",
    }),
    dropdownIndicator: (base: object) => ({
      ...base,
      marginTop: "-6px",
    }),
  };

  const customTheme = (theme: Theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "#1a7275",
      primary50: "#419da0",
    },
  });

  return (
    <div className="grid col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
      <div className="flex flex-col">
        <label className="text-left text-sm">Class</label>
        <div className="flex flex-wrap items-stretch focus:outline-none">
          <Select
            styles={customStyles}
            theme={customTheme}
            isMulti
            name={name}
            value={selected}
            onChange={(newValue) =>
              setState(
                newValue as SetStateAction<{ value: number; label: string }[]>
              )
            }
            components={animatedComponents}
            options={options}
            classNamePrefix="select"
            closeMenuOnSelect={false}
            placeholder="[Classes]"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
