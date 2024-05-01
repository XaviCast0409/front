import { ChangeEvent, useEffect, useState } from "react";
import { zipCodeStore } from "../../store/zipCodeStore";

export function useFunctionZipCode() {
  const { validateZipCode, createZipCode, setValidate } = zipCodeStore();
  const [zipCode, setZipCode] = useState<{
    zipCode: string
  }>({
    zipCode: ""
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldName: string
  ): void => {
    const { value } = e.target;
    setZipCode({ ...zipCode, [fieldName]: value });
  };

  useEffect(() => {
    if (`${zipCode.zipCode}`.length > 4) {
      validateZipCode(zipCode)
    }
    if (`${zipCode.zipCode}`.length === 0) setValidate()
  }, [zipCode])

  const onSubmitCreate = (values: any) => {
    try {
      createZipCode(values);
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setZipCode,
    onSubmitCreate,
    zipCode,
    handleChange
  };
}
