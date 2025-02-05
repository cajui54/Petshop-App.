"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { getDateToday } from "../_utils/format-date";
interface Date {
  date: string;
}
interface ContextCalendary {
  calendary: Date;
  setDate?: Dispatch<SetStateAction<Date>>;
}
interface IChdildren {
  children: ReactNode;
}
const intialeContext: ContextCalendary = {
  calendary: { date: getDateToday() },
};
export const ContextCalenday = createContext<ContextCalendary>(intialeContext);

export const ContextCalendayProvider = ({ children }: IChdildren) => {
  const [calendary, setDate] = useState<Date>({ date: getDateToday() });
  return (
    <ContextCalenday.Provider value={{ calendary, setDate }}>
      {children}
    </ContextCalenday.Provider>
  );
};
