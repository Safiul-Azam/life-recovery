import { dateFormat } from "./dateFormat";

export const pastDays = (day) => {
  // ✅ start from today's date
  const prvDays = [...Array(day ||7).keys()].map((index) => {
    const date = new Date();

    date.setDate(date.getDate() - index);

    const format = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    const formatDate = dateFormat(format);

    return formatDate;
  });

  return prvDays;

  // 👇️ [0, 1, 2, 3, 4, 5, 6]
  // console.log([...Array(7).keys()]);
};
