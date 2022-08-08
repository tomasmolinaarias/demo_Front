const filterProduct1 = (Products) => {
  const orderDate = Products.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  ).filter(
    (element) =>
      element.name.substring(0, 3) === "OSB" && element.date === "2022-8-6"
  );

  return orderDate;
};
const filterProduct2 = (Products) => {
  const orderDate = Products.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  ).filter(
    (element) =>
      element.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
      element.date === "2022-8-6"
  );

  return orderDate;
};

module.exports = { filterProduct1, filterProduct2 };
