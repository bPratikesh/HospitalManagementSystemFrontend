function parseDate(dateTime) {
  if (!dateTime) return null;

  // Appointment format:
  // dd-MM-yyyy HH:mm:ss
  if (dateTime.includes(" ")) {
    const [datePart, timePart] = dateTime.split(" ");

    const [day, month, year] = datePart.split("-").map(Number);

    const [hour, minute, second] = timePart.split(":").map(Number);

    return new Date(year, month - 1, day, hour, minute, second);
  }

  // Prescription format:
  // yyyy-MM-dd
  const [year, month, day] = dateTime.split("-").map(Number);

  return new Date(year, month - 1, day);
}

export const formatDate = (dateTime) => {
  const date = parseDate(dateTime);

  if (!date) return "";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const formatTime = (dateTime) => {
  const date = parseDate(dateTime);

  if (!date) return "";

  return date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatDateTime = (dateTime) => {
  return `${formatDate(dateTime)} ${formatTime(dateTime)}`;
};
