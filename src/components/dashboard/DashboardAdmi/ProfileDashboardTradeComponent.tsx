import SideBarDashboard from "../DashboardConstructora/SideBarDashboard";
import { TableTrade } from "./TableTrade";
import { useTradeHook } from "../../../hooks/hookTrade/useTradeHook";
import Modal from "../../../utils/Modal";
import { ModalConterTrade } from "./TradeModalContent";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Button from "../../../utils/Button";
import { useClasses } from "../../../hooks/HookClass/useHookClass";
import { classStore } from "../../../store/classStore";

const ProfileDashboardTradeComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const { classes } = useClasses();
  const { getClasses } = classStore();
  const [tradeSelected, setTradeSelected] = useState({ name: "", account: 1 });
  const [classTrade, setClassTrade]: [
    { value: number; label: string }[],
    Dispatch<SetStateAction<{ value: number; label: string }[]>>
  ] = useState([{ value: 0, label: "SelectClass" }]);

  const {
    getAllTradePagination,
    handlePageChange,
    handlePerRowsChange,
    size,
    currentPage,
    trade,
    totalTrade,
    onSubmitCreate,
  } = useTradeHook();

  useEffect(() => {
    getAllTradePagination({ page: currentPage, size });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, size]);
  useEffect(() => {
    getClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTradeSelected({ ...tradeSelected, [e.target.name]: e.target.value });
  };

  const onSubmitCreateTrade = () => {
    const idClass: number[] = [];
    for (const classTradeId of classTrade) {
      idClass.push(Number(classTradeId.value));
    }
    onSubmitCreate({ ...tradeSelected, classIdArray: idClass });
    setClassTrade([{ value: 0, label: "SelectClass" }]);
  };

  return (
    <div className="flex w-full">
      <SideBarDashboard />
      <div className="w-full mt-20">
        <div className="w-full px-2 py-2">
          <TableTrade
            totalTrade={totalTrade}
            trade={trade}
            handlePageChange={handlePageChange}
            handlePerRowsChange={handlePerRowsChange}
            size={size}
            currentPage={currentPage}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>
      {openModal && (
        <Modal
          title="Add Trade"
          closeModal={() => {
            setOpenModal(false);
            setClassTrade([{ value: 0, label: "SelectClass" }]);
          }}
          className="flex flex-col justify-between bg-white rounded-md w-2/5 px-5 pb-5"
        >
          <ModalConterTrade
            handleChange={handleChange}
            setClassTrade={setClassTrade}
            classTrade={classTrade}
            classes={classes}
          />
          <section className="mt-5">
            <Button
              text="Save"
              className="btn-primary mt-5 h-10"
              type="button"
              handleClick={onSubmitCreateTrade}
            />
          </section>
        </Modal>
      )}
    </div>
  );
};
export default ProfileDashboardTradeComponent;
