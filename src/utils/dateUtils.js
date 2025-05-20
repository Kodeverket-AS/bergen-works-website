export const formatGoogleDate = date =>
  new Date(date).toISOString().replace(/[-:]\d{2}|\.\d{3}/g, "");

export const generateGoogleCalendarLink = ({ title, date, description = "", location = "" }) => {
  const start = formatGoogleDate(date);
  const end = formatGoogleDate(new Date(new Date(date).getTime() + 2 * 60 * 60 * 1000));
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
};

export const formatNorwegianDate = date =>
  new Date(date || Date.now()).toLocaleDateString("no-NO", {
    year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
  });
