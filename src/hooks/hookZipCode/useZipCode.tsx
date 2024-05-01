import { useState, useEffect } from "react";
import { zipCodeStore } from "../../store/zipCodeStore";
import { zipCodeAttributes } from "storeType";

export function useZipCode() {
  const { zipCode: zipCodeData } = zipCodeStore();
  const [zipCode, setZipCode] = useState<zipCodeAttributes>();
  
  useEffect(() => {
    setZipCode({
      id: zipCodeData?.id,
      city: String(zipCodeData?.city).toUpperCase(),
      code: Number(zipCodeData?.code),
      state: String(zipCodeData?.state).toUpperCase(),
    });
  }, [zipCodeData]);

  return {
    zipCode,
  };
}
