import SideBarDashboard from "../DashboardConstructora/SideBarDashboard";
import InputField from "../../../utils/InputField";
import { TableClasses } from "./TableClass";
import { useClasses } from "../../../hooks/HookClass/useHookClass";
import { useEffect, useState } from "react";
import { classStore } from "../../../store/classStore";
import Modal from "../../../utils/Modal";
import Button from "../../../utils/Button";

export const Classes = () => {
  const { classes } = useClasses();
  const { getClasses, createClass } = classStore();
  const [classesSelected, setClassesSelected] = useState({ name: "" });
  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassesSelected({ ...classesSelected, [e.target.name]: e.target.value });
  }

  const onSubmitCreate = () => {
    createClass(classesSelected);
    setOpenModal(false);
  }

  useEffect(() => {
    getClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getClasses]);
  return (
    <div className="flex w-full">
      <SideBarDashboard />
      <div className="w-full mt-20">
        <div className="w-full px-2 py-2">
          <TableClasses classes={classes} setOpenModal={setOpenModal} />
        </div>
      </div>
      {openModal && (
        <Modal
          closeModal={() => {
            setOpenModal(false);
          }}
          title="Create Class"
          className="flex flex-col justify-between bg-white rounded-md w-2/5 px-5 pb-5"
        >
          <div>
            <InputField 
              placeholder="Class Name"
              name="name"
              type="text"
              labelText="Class Name"
              requiredText="Class Name is required"
              onChange={handleChange}
            />
          </div>
          <section className="mt-5">
            <Button
              text="Save"
              className="btn-primary mt-5 h-10"
              type="button"
              handleClick={onSubmitCreate}
            />
          </section>
        </Modal>
      )}
    </div>
  );
};
