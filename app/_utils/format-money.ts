export const formatMoney = (price: number) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(price);
};
