"use client";
import getScheduleDto, {
  ScheduleDto,
} from "@/app/_data-access/schedule/get-schedule";
import { getTimeNow } from "@/app/_utils/format-date";
import { formatMoney } from "@/app/_utils/format-money";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { GiDogBowl, GiMoneyStack } from "react-icons/gi";
import { PiClockUserFill } from "react-icons/pi";
import { SiPug } from "react-icons/si";
interface ShowClientsProps {
  date: string;
}
interface ManagerCard {
  startTime: null | string;
  endTime: null | string;
  indexs: number[];
  ids: string[];
}
const ShowClients = ({ date }: ShowClientsProps) => {
  const [datas, setDatas] = useState<ScheduleDto[]>([]);
  const [managerCard, setManagerCard] = useState<ManagerCard>({
    startTime: null,
    endTime: null,
    indexs: [],
    ids: [],
  });
  useEffect(() => {
    const requestSchedule = async () => {
      const clients = await getScheduleDto("24/01/2025");
      setDatas(clients);
    };
    requestSchedule();
  }, []);
  const handleFinish = (index: number) => {
    setManagerCard((prevState) => ({
      ...prevState,
      endTime: getTimeNow(),
      indexs: [...prevState.indexs, index],
    }));
  };
  const handleStartTime = (id: string) => {
    const timeNow = getTimeNow();
    if (!managerCard.ids.includes(id)) {
      setManagerCard((prevState) => ({
        ...prevState,
        startTime: timeNow,
        ids: [...prevState.ids, id],
      }));
      return;
    } else {
      setManagerCard((prevState) => ({
        ...prevState,
        startTime: null,
        ids: prevState.ids.filter((_id) => _id !== id),
      }));
    }
  };
  return (
    <div
      className={`customScrollbar py-2 w-full sm:w-[600px] h-[500px] bg-neutral-950 mx-auto my-8 rounded-2xl overflow-auto`}
    >
      {datas.length > 0 ? (
        [...datas, ...datas].map((client, index) => (
          <div
            key={client.id}
            className={`${
              !managerCard.indexs.includes(index) ? "opacity-100" : "opacity-45"
            } bg-neutral-800 w-[95%] flex items-center h-[250px] mx-auto my-6 rounded-xl border border-pink-500`}
          >
            <div className="mx-4 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] border border-pink-500 rounded-full flex items-center justify-center">
              <Image
                src={client.user.image}
                alt={`profile image ${client.user.name}`}
                width={50}
                height={50}
                className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full"
              />
            </div>

            <div className="flex-grow">
              <h2 className="text-white text-xl font-semibold tracking-wider mb-1">
                {client.user.name}
              </h2>
              <ul className="pr-2 clientList">
                <li>
                  <span>
                    <GiMoneyStack className="text-green-500 text-2xl mr-1" />
                    Preço:
                  </span>
                  <span>{formatMoney(client.price)}</span>
                </li>
                <li className="clientList">
                  <span>
                    <PiClockUserFill className="text-green-500 text-2xl mr-1" />
                    Horário:
                  </span>
                  <span>{client.time}</span>
                </li>

                <li className="h-[70px] flex justify-between items-center">
                  <p className="flexRowsCenter">
                    <GiDogBowl className="mr-2 text-2xl text-green-500" />
                    Ações:
                  </p>
                  <div className="flex items-center justify-center w-[120px]">
                    <button
                      onClick={() => handleStartTime(client.id)}
                      className="text-sm flex flex-col items-center "
                    >
                      <CiSquareCheck className="text-2xl bg-blue-500 p-1 rounded-md" />
                      <span className="text-[7px]">Iniciar</span>
                    </button>

                    <button
                      disabled={managerCard.endTime ? true : false}
                      onClick={() => handleFinish(index)}
                      className="text-sm mx-2 flex flex-col items-center justify-center rounded-lg"
                    >
                      <CiSquareCheck className="text-2xl bg-green-500 p-1 rounded-md" />
                      <span className="text-[7px]">Finalizar</span>
                    </button>

                    <button className="text-sm flex flex-col items-center justify-center rounded-lg">
                      <CiSquareCheck className="text-2xl bg-red-500 p-1 rounded-md" />
                      <span className="text-[7px]">Excluir</span>
                    </button>
                  </div>
                </li>
              </ul>

              {managerCard.ids.includes(client.id) && (
                <div className="w-[95%] h-6 bg-neutral-900 my-2 rounded-lg flex justify-around items-center">
                  <p>
                    <span>Início:</span>
                    <span className="text-pink-500 font-semibold">
                      {managerCard.startTime ? managerCard.startTime : "00:00"}
                    </span>
                  </p>

                  <p>
                    <span>Finalizado:</span>
                    <span className="text-pink-500 font-semibold">
                      {managerCard.endTime ? managerCard.endTime : "00:00"}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="w-4/5 mx-auto py-7 mt-8">
          <SiPug className="block mx-auto text-[80px] text-pink-500 p-2 rounded-full" />

          <p className="text-center text-2xl">Não há agendamentos</p>
          <p className="text-center text-2xl  -mt-2 ">
            para data
            <span className="text-pink-500 font-semibold"> {date}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowClients;
