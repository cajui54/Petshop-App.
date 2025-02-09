export const months = [
  {
    month: "Janeiro",
    number: 0,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    month: "Fevereiro",
    number: 1,
    days: Array.from({ length: 28 }, (_, i) => i + 1),
  }, // Adjust for leap years as needed
  {
    month: "Março",
    number: 2,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    month: "Abril",
    number: 3,
    days: Array.from({ length: 30 }, (_, i) => i + 1),
  },
  {
    month: "Maio",
    number: 4,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    month: "Junho",
    number: 5,
    days: Array.from({ length: 30 }, (_, i) => i + 1),
  },
  {
    month: "Julho",
    number: 6,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    month: "Agosto",
    number: 7,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    month: "Setembro",
    number: 8,
    days: Array.from({ length: 30 }, (_, i) => i + 1),
  },
  {
    month: "Outubro",
    number: 9,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    month: "Novembro",
    number: 10,
    days: Array.from({ length: 30 }, (_, i) => i + 1),
  },
  {
    month: "Dezembro",
    number: 11,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
];

export const getMonthName = (month: number) => {
  const findMonth = months.find((_month) => _month.number === month);

  return findMonth ? findMonth.month : "Ops! ;(";
};
