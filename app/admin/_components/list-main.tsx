import TitlesContainer from "@/app/_components/titles-container";
import ListManager from "./list-manager";

const ListClient = () => {
  return (
    <div className="w-[95%] h-[500px] rounded-xl mx-auto mt-11 ">
      <TitlesContainer
        title="Lista de Clientes"
        subtile="Agendamentos de Horários e Datas"
      />
      <ListManager />
    </div>
  );
};

export default ListClient;
