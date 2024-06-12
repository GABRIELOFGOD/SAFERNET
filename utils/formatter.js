

  // Function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) {
    // Posted today
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}${hours >= 12 ? 'pm' : 'am'}`;
    return `Posted today ${formattedTime}`;
  } else if (diffInDays === 1) {
    // Posted yesterday
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}${hours >= 12 ? 'pm' : 'am'}`;
    return `Posted yesterday ${formattedTime}`;
  } else if (diffInDays < 7) {
    // Posted within the last week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}${hours >= 12 ? 'pm' : 'am'}`;
    return `Posted ${dayOfWeek} ${formattedTime}`;
  } else {
    // Posted more than a week ago
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return `Posted on ${date.toLocaleDateString('en-US', options)}`;
  }
};
