import { IconType } from "react-icons";
import { GiShower } from "react-icons/gi";
import { LuPawPrint } from "react-icons/lu";
import { IoCutOutline } from "react-icons/io5";

interface IconManeger {
  icon: IconType;
}

export const iconManager = (type: string): IconManeger => {
  switch (type) {
    case "Banho":
      return { icon: GiShower };
    case "Tosa":
      return { icon: IoCutOutline };
    default:
      return { icon: LuPawPrint };
  }
};
