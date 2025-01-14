import imgShower from "@/app/_assets/images/pug-shower.png";
import imgTosa from "@/app/_assets/images/dog-maltes-tosa.png";
import imgSad from "@/app/_assets/images/pugSad.png";
import { StaticImageData } from "next/image";

interface IAction {
  type: string;
}
interface IState {
  image: StaticImageData;
}
const initalState: IState = {
  image: imgSad,
};

const useReduceImages = () => {
  const setImage = (action: IAction): IState => {
    switch (action.type) {
      case "Banho":
        return { image: imgShower };
      case "Tosa":
        return { image: imgTosa };
      default:
        return initalState;
    }
  };

  return {
    setImage,
  };
};

export default useReduceImages;
