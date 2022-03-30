export const dateFormatToIUHelper = (unformattedDate: string): string => {
  const stringToDate = new Date(unformattedDate);
  return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    stringToDate,
  );
};
