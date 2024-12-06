export function formatDate(): string {
  const date: Date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(2);
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours >= 12 ? "pm" : "am";

  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  return `${day}/${month}/${year} ${formattedHours}:${minutes}${period}`;
}
