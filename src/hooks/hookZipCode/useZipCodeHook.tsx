import { useFunctionZipCode } from "./useFuctionZipCode";
import { useZipCode } from "./useZipCode";
import { zipCodeStore } from "../../store/zipCodeStore";

export function useZipcCodeHook() {
  const {
    setZipCode,
    onSubmitCreate,
    zipCode: zipCodeNumber,
    handleChange
  } = useFunctionZipCode();
  const { zipCode } = useZipCode();
  const { message, validate, setMessage } = zipCodeStore();
  return {
    setZipCode,
    onSubmitCreate,
    zipCode,
    message,
    validate,
    zipCodeNumber,
    handleChange,
    setMessage
  };
}


