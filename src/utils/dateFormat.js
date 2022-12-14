export const dateFormat = ({ day, month, year }, date) => {
  const today = new Date();

  let dd = day || today?.getDate();
  let mm = month || today?.getMonth() + 1;
  const yyyy = year || today?.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedDate = dd + "-" + mm + "-" + yyyy;

  // console.log(formattedToday);
  // output === '01-10-2022'

  return formattedDate;
};

export const dateFormatRevers = ({ day, month, year }, date) => {
  const today = new Date();

  let dd = day || date?.split("-")[0] || today?.getDate();
  let mm = month || date?.split("-")[1] || today?.getMonth() + 1;
  const yyyy = year || date?.split("-")[2] || today?.getFullYear();

  const formattedToday = yyyy + "-" + mm + "-" + dd;

  // console.log(formattedToday);
  // output === '2022-10-01'

  return formattedToday;
};
