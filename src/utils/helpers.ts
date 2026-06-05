/**
 * Formats a date to the standard long format used in the application.
 * Example output: "Thursday, June 4, 2026"
 * 
 * @param date The date to format (defaults to current date)
 * @returns A formatted date string
 */
export const getFormattedDate = (date: Date | string | number = new Date()): string => {
  const dateObj = typeof date === "string" || typeof date === "number" ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  return dateObj.toLocaleDateString("en-US", options);
};
