interface DateSparate {
  day: string;
  month: string;
  year: string;
  hour: number;
  minute: number;
}
export const addZeroNumber = (value: string): string =>
  Number(value) < 10 ? `0${value}` : value;

export const formatDateBr = (date: string): string => {
  const dates = date.toString().split("/");

  return `${addZeroNumber(dates[1])}/${addZeroNumber(dates[2])}/${dates[0]}`;
};
export const getDateToday = (): string => {
  const date = new Date();

  const day = date.getDate().toString();
  const month = (date.getMonth() + 1).toString();
  const _dateToday = `${addZeroNumber(day)}/${addZeroNumber(
    month,
  )}/${date.getFullYear()}`;

  return _dateToday;
};
export const getDateTodaySeparate = (): DateSparate => {
  const date = new Date();
  const day = addZeroNumber(date.getDate().toString());
  const month = addZeroNumber((date.getMonth() + 1).toString());
  const year = date.getFullYear().toString();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return { day, month, year, hour, minute };
};
export const separateDate = (date: string, time: string): DateSparate => {
  const day = date.split("/")[0];
  const month = date.split("/")[1];
  const year = date.split("/")[2];
  const hour = Number(time.split(":")[0]);
  const minute = Number(time.split(":")[1]);
  return {
    day,
    month,
    year,
    hour,
    minute,
  };
};
export const getTimeNow = (): string => {
  const date = new Date();
  const hour = addZeroNumber(date.getHours().toString());
  const minutes = addZeroNumber(date.getMinutes().toString());

  return `${hour}:${minutes}`;
};
export const convertTimeToNumber = (time: string): number => {
  return Number(time.split(":").join(""));
};
