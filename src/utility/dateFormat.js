//this function returns the date and time in correct format it takes timestamp from mongoose as input

export const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    
const date = new Date(dateString);
return date.toLocaleString("en-IN", options);
};