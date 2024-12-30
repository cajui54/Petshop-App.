import SVG_Google from "./svg-google";
import { signOutOfGoogle } from "../_actions/auth/signout-use";

const ButtonOutForm = () => {
  return (
    <form
      action={signOutOfGoogle}
      className="bg-slate-100 w-[90%] h-[600px] rounded-md shadow-md border border-emerald-500 shadow-neutral-400 p-2"
    >
      <div className="w-4/5 my-10 mx-auto">
        <p className="text-emerald-500 text-xl mb-3">Já é cadastrado?</p>
        <button className="bg-emerald-500 p-2 rounded-lg text-white w-full flex justify-center items-center">
          <SVG_Google />
          <span>Registre-se com o google.</span>
        </button>
      </div>
    </form>
  );
};

export default ButtonOutForm;
