import { format } from "date-fns";

export const formatDateToMMddttmmss = (date: Date) => {
  if (date) {
    console.log("데이트 : ", date);
    return format(new Date(date), "MM월 dd일");
  }
  return "하하";
};
