import dayjs from "dayjs";

export function formatDate(date: string, template = "YYYY-MM-DD") {
  return dayjs(date).format(template);
}
