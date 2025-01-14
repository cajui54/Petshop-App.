const addZeroNumber = (value: string): string =>
  Number(value) < 10 ? `0${value}` : value;

export const formatDateBr = (date: string): string => {
  const dates = date.toString().split("/");

  return `${addZeroNumber(dates[1])}/${addZeroNumber(dates[2])}/${dates[0]}`;
};
