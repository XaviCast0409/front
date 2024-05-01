import { useEffect, useState } from "react";
import SideBarDashboard from "./SideBarDashboard";
import Card from "./CardDash";
import { useCompanyHook } from "../../../hooks/hookCompany/useCompanyHook";
import { companyProfileStore } from "../../../store/companyProfileStore";
import Modal from "../../../utils/Modal";
import InputSelect from "../../../utils/SelectInput";
import Button from "../../../utils/Button";
import { classStore } from "../../../store/classStore";
import { useTradeHook } from "../../../hooks/hookTrade/useTradeHook";

const DashboardComponent: React.FC = () => {
  const { comapanyId, findCompanyById } = useCompanyHook();
  const { getAllTrades, trade, tradeById, getTradeById } = useTradeHook()
  const {
    deleteTradeClassCompanyUser,
    createTradeClassCompanyUser,
    createTradeCompanyUser,
  } = companyProfileStore();
  const [open, setOpen] = useState(false);
  const [openTrade, setOpenTrade] = useState(false);
  const [classId, setClassId] = useState<number>(0); // Se cambió de {} a [
  const [tradeName, setTradeCreate] = useState<{ name: string }>({ name: "" });
  const [tradeId, setTradeId] = useState(0);
  const { getClasses } = classStore();
  
  useEffect(() => {
    findCompanyById(1);
    getClasses();
    getAllTrades()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = () => {
    findCompanyById(1);
  };
  const createClassProfile = () => {
    createTradeClassCompanyUser({
      ClassId: classId,
      TradeCompanyUserId: tradeId,
    });
    setClassId(0);
    setTimeout(() => {
      refresh();
    }, 1000);
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClassId(Number(event.target.value));
  };
  const handleChangeTRADE = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.selectedOptions[0].text);
    setTradeCreate({ name: event.target.selectedOptions[0].text });
  };
  
  const createTradeProfile = () => {
    createTradeCompanyUser({ name: tradeName.name, companyId: 1 });
    setTradeCreate({ name: ""})
    setTimeout(() => {
      refresh();
    }, 1000);
    setOpenTrade(false);  
  };

  const findClassTradeId = (title: string) => {
    getTradeById(title)
  }

  return (
    <div className="flex flex-col md:flex-row h-screen mt-12">
      <SideBarDashboard />
      <div className="flex flex-col w-full h-screen">
        <h1 className="">Trades</h1>
        <div className="w-full">
          <Button
            text="Add Trade"
            className="btn-primary mt-5 h-10"
            type="button"
            handleClick={() => setOpenTrade(true)}
          />
        </div>
        <div className="flex flex-wrap mt-5">
          {comapanyId &&
            (
              comapanyId.TradeCompanyUsers as {
                id: number;
                name: string;
                Classes: [{ id: number; name: string }];
              }[]
            )?.map((item) => (
              <Card
                setOpen={setOpen}
                refresh={refresh}
                deleteFunction={deleteTradeClassCompanyUser}
                idTrade={item.id}
                key={item.id}
                title={item.name}
                descriptions={item.Classes || []}
                setTradeId={setTradeId}
                findClassTradeId={findClassTradeId}
              />
            ))}
        </div>
      </div>
      {open && (
        <Modal
          closeModal={() => setOpen(false)}
          title="Modal"
          className="flex flex-col justify-between bg-white rounded-md w-2/5 px-5 pb-5"
        >
          <InputSelect
            labelText="Class"
            name="class"
            options={tradeById?.Classes || []}
            onChange={handleChange}
          />
          <section className="mt-5">
            <Button
              text="Save"
              className="btn-primary mt-5 h-10"
              type="button"
              handleClick={createClassProfile}
            />
          </section>
        </Modal>
      )}
      {openTrade && (
        <Modal
          closeModal={() => setOpenTrade(false)}
          title="Modal TRADE"
          className="flex flex-col justify-between bg-white rounded-md w-2/5 px-5 pb-5"
        >
          <InputSelect
            labelText="Class"
            name="class"
            options={trade}
            onChange={handleChangeTRADE}
          />
          <section className="mt-5">
            <Button
              text="Save"
              className="btn-primary mt-5 h-10"
              type="button"
              handleClick={createTradeProfile}
            />
          </section>
        </Modal>
      )}
    </div>
  );
};

export default DashboardComponent;
