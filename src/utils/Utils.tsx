import { Loading, NoResultFound } from "../assets/Icons";

export const LoadingDataTable: React.FC = () => {
  return (
    <div className="bg-stone-100 flex justify-center items-center rounded-md w-full h-[146px]">
      <div className="flex flex-col justify-center items-center text-stone-200">
        <p className="pb-3 text-stone-600 font-semibold text-lg">Cargando</p>
        <Loading />
      </div>
    </div>
  );
};

export const NoResultData: React.FC = () => {
  return (
    <div className="bg-stone-100 flex justify-center items-center rounded-md w-full h-[146px]">
      <div className="flex flex-col justify-center items-center ">
        <p className="pb-3 text-stone-600">No se encontraron resultados</p>
        <NoResultFound />
      </div>
    </div>
  );
};
export const DataStates = () => {
  const statesEEUU = [
    {"value": 0, "name": "Nueva York", "abrev": "NY"},
    {"value": 1, "name": "Pensilvania", "abrev": "PA"},
    {"value": 2, "name": "Delaware", "abrev": "DE"},
    {"value": 3, "name": "Distrito de Columbia", "abrev": "DC"},
    {"value": 4, "name": "Virginia", "abrev": "VA"},
    {"value": 5, "name": "Maryland", "abrev": "MD"},
    {"value": 6, "name": "Virginia", "abrev": "VA"},
    {"value": 7, "name": "Virginia Occidental", "abrev": "WV"},
    {"value": 8, "name": "Carolina del Norte", "abrev": "NC"},
    {"value": 9, "name": "Carolina del Sur", "abrev": "SC"},
    {"value": 10, "name": "Georgia", "abrev": "GA"},
    {"value": 11, "name": "Florida", "abrev": "FL"},
    {"value": 12, "name": "Asociación de Antillas", "abrev": "AA"},
    {"value": 13, "name": "Florida", "abrev": "FL"},
    {"value": 14, "name": "Alabama", "abrev": "AL"},
    {"value": 15, "name": "Tennessee", "abrev": "TN"},
    {"value": 16, "name": "Misisipi", "abrev": "MS"},
    {"value": 17, "name": "Georgia", "abrev": "GA"},
    {"value": 18, "name": "Kentucky", "abrev": "KY"},
    {"value": 19, "name": "Ohio", "abrev": "OH"},
    {"value": 20, "name": "Indiana", "abrev": "IN"},
    {"value": 21, "name": "Míchigan", "abrev": "MI"},
    {"value": 22, "name": "Iowa", "abrev": "IA"},
    {"value": 23, "name": "Wisconsin", "abrev": "WI"},
    {"value": 24, "name": "Minnesota", "abrev": "MN"},
    {"value": 25, "name": "Distrito de Columbia", "abrev": "DC"},
    {"value": 26, "name": "Dakota del Sur", "abrev": "SD"},
    {"value": 27, "name": "Dakota del Norte", "abrev": "ND"},
    {"value": 28, "name": "Montana", "abrev": "MT"},
    {"value": 29, "name": "Illinois", "abrev": "IL"},
    {"value": 30, "name": "Misuri", "abrev": "MO"},
    {"value": 31, "name": "Kansas", "abrev": "KS"},
    {"value": 32, "name": "Nebraska", "abrev": "NE"},
    {"value": 33, "name": "Luisiana", "abrev": "LA"},
    {"value": 34, "name": "Arkansas", "abrev": "AR"},
    {"value": 35, "name": "Oklahoma", "abrev": "OK"},
    {"value": 36, "name": "Texas", "abrev": "TX"},
    {"value": 37, "name": "Colorado", "abrev": "CO"},
    {"value": 38, "name": "Wyoming", "abrev": "WY"},
    {"value": 39, "name": "Idaho", "abrev": "ID"},
    {"value": 40, "name": "Utah", "abrev": "UT"},
    {"value": 41, "name": "Arizona", "abrev": "AZ"},
    {"value": 42, "name": "Nuevo México", "abrev": "NM"},
    {"value": 43, "name": "Texas", "abrev": "TX"},
    {"value": 44, "name": "Nevada", "abrev": "NV"},
    {"value": 45, "name": "California", "abrev": "CA"},
    {"value": 46, "name": "Asociación de Pacífico", "abrev": "AP"},
    {"value": 47, "name": "Hawái", "abrev": "HI"},
    {"value": 48, "name": "Guam", "abrev": "GU"},
    {"value": 49, "name": "Islas Palau", "abrev": "PW"},
    {"value": 50, "name": "Micronesia", "abrev": "FM"},
    {"value": 51, "name": "Islas Marianas del Norte", "abrev": "MP"},
    {"value": 52, "name": "Islas Marshall", "abrev": "MH"},
    {"value": 53, "name": "Oregón", "abrev": "OR"},
    {"value": 54, "name": "Washington", "abrev": "WA"},
    {"value": 55, "name": "Alaska", "abrev": "AK"}
  ]
  return {
    statesEEUU
  }
}

