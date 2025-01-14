"use client";
import { IService } from "../_interfaces/service";

interface SaveInStorageProps {
  key: string;
  value: string | IService[];
}
const useManagerStorage = () => {
  const saveInStorage = ({ key, value }: SaveInStorageProps) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
    return;
  };
  const getStorageByKey = (key: string) => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem(key)) {
        const storage = sessionStorage.getItem(key);

        if (storage) {
          return JSON.parse(storage);
        }
      }
    }
    return null;
  };
  return {
    saveInStorage,
    getStorageByKey,
  };
};

export default useManagerStorage;
