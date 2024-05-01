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
