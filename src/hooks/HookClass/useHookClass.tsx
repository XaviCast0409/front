import { useEffect, useState } from "react";
import { classStore } from "../../store/classStore";
import { ClassAttributes } from "storeType";

export function useClasses() {
  const { classes: classData } = classStore();
  const [classes, setClass] = useState<ClassAttributes[]>([]);

  useEffect(() => {
    const newClass = classData.map((item, index) => ({
      item: index + 1,
      id: item.id,
      value: item.id,
      name: String(item.name).toUpperCase(),
      label: String(item.name).toUpperCase(),
    }));
    setClass(newClass);
  }, [classData]);

  return {
    classes,
  };
}
