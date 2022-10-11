export const dateFormat = ({ day, month, year }, date) => {
  const today = date || new Date();

  let dd = day || today?.getDate();
  let mm = month || today?.getMonth() + 1;
  const yyyy = year || today?.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "-" + mm + "-" + yyyy;

  // console.log(formattedToday);
  // output === '01-10-2022'

  return formattedToday;
};

export const dateFormatRevers = (date) => {
  let dd = date.split("-")[0];
  let mm = date.split("-")[1];
  const yyyy = date.split("-")[2];

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = yyyy + "-" + mm + "-" + dd;

  // console.log(formattedToday);
  // output === '2022-10-01'

  return formattedToday;
};

