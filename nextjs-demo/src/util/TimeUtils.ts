export default function getCurrentTime() {
  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone: "America/Chicago",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const now = new Date();
  return formatTime(now);
}
