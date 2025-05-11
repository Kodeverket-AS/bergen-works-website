export const formatGoogleDate = (date) =>
  new Date(date).toISOString().replace(/-|:|\.\d\d\d/g, "");

export const formatDisplayDate = (dateString) => {
  if (!dateString) return "Dato ikke tilgjengelig"; 
  return new Date(dateString).toLocaleDateString("no-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}; 