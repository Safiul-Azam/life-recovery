export const dateFormat = (date) => {
  const today = date || new Date();

  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "-" + mm + "-" + yyyy;

  console.log(formattedToday);
  // output === '27-09-2022'

  return formattedToday;
};
