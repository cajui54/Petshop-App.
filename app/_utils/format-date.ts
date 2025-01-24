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
    month
  )}/${date.getFullYear()}`;

  return _dateToday;
};
export const getTimeNow = (): string => {
  const date = new Date();
  const hour = addZeroNumber(date.getHours().toString());
  const minutes = addZeroNumber(date.getMinutes().toString());

  return `${hour}:${minutes}`;
};
